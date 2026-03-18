/* ============================================================
   SECTION 3: APP INITIALIZATION
   Section switcher, hash routing, completion, search, prev/next
   ============================================================ */
import { javascriptCourse } from '../data/javascript.js';
import { courseRegistry } from '../data/registry.js';

(function initApp() {
  // Tracks the last visited lesson index for each section
  const lastVisitedLesson = {};
  let _tocObserver = null;
  const STORAGE_NS = "jslr-v2";
  const COMPLETION_STORAGE_KEY = STORAGE_NS + "-completed";
  const NOTES_STORAGE_KEY = STORAGE_NS + "-notes";
  const BOOKMARKS_STORAGE_KEY = STORAGE_NS + "-bookmarks";
  const HIGHLIGHTS_STORAGE_KEY = STORAGE_NS + "-highlights";
  const CONFUSED_STORAGE_KEY = STORAGE_NS + "-confused";

  // Course selection
  const urlParams = new URLSearchParams(window.location.search);
  const domainId = urlParams.get('domain') || 'coding';
  const subjectId = urlParams.get('subject') || 'javascript';

  let currentDomain = courseRegistry[domainId] || courseRegistry['coding'];
  let currentCourseEntry = currentDomain.subjects[subjectId] || currentDomain.subjects['javascript'];
  let currentCourse = currentCourseEntry && currentCourseEntry.course ? currentCourseEntry.course : javascriptCourse;

  document.addEventListener('DOMContentLoaded', () => {
    const iconEl = document.getElementById('courseIcon');
    const titleEl = document.getElementById('courseTitle');
    if (iconEl && currentCourseEntry) iconEl.textContent = currentCourseEntry.iconText || 'JS';
    if (titleEl && currentCourseEntry) titleEl.textContent = currentCourseEntry.title || 'JavaScript Guide';
    if (currentCourseEntry) document.title = currentCourseEntry.title + ' — ThinkBase';
  });

  function getResumeIndex(sectionIdx, sectionLessons) {
  var sectionId = (currentCourse.sections[sectionIdx] || {}).id || String(sectionIdx);

  // Find the first lesson that has content and is not completed
  for (var i = 0; i < sectionLessons.length; i++) {
    if (hasLessonContent(sectionLessons[i]) && !isCompleted(sectionId, i)) {
      return i;
    }
  }

  // All content lessons completed — fall back to last visited, then first
  return lastVisitedLesson[sectionIdx] !== undefined
    ? lastVisitedLesson[sectionIdx]
    : 0;
}

  function getLessonSlug(lesson) {
    if (lesson.slug) return lesson.slug;
    return (
      String(lesson.title)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "lesson"
    );
  }

  function applyHighlighting() {
    contentEl.querySelectorAll(".code-block code").forEach(function (codeEl) {
      // Mark as JavaScript so Prism knows what grammar to use
      if (!codeEl.className.includes("language-")) {
        codeEl.classList.add("language-javascript");
      }
      // Prism needs the parent pre to have the class too
      var pre = codeEl.parentElement;
      if (pre && !pre.className.includes("language-")) {
        pre.classList.add("language-javascript");
      }
      Prism.highlightElement(codeEl);
    });
  }

  function getLessons(section) {
    if (section.lessons) return section.lessons;
    if (section.subsections) {
      return section.subsections.flatMap(function (sub) {
        return (sub.lessons || []).map(function (lesson) {
          var prefix =
            String(sub.title || "")
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "") || "sub";
          if (!lesson.slug) {
            var base =
              String(lesson.title || "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "") || "lesson";
            lesson.slug = prefix + "-" + base;
          }
          return lesson;
        });
      });
    }
    return [];
  }

  function getCompletionKey(sectionId, lessonIndex) {
    return (
      (currentCourseEntry ? currentCourseEntry.id : "course") +
      "/" +
      sectionId +
      "/" +
      lessonIndex
    );
  }

  function loadCompletion() {
    try {
      const raw = localStorage.getItem(COMPLETION_STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }

  function saveCompletion(state) {
    try {
      localStorage.setItem(COMPLETION_STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function isCompleted(sectionId, lessonIndex) {
    var v = completionState[getCompletionKey(sectionId, lessonIndex)];
    if (!v) return false;
    if (v === true) return true;
    return !!v.done;
  }

  function setCompleted(sectionId, lessonIndex, completed) {
    var key = getCompletionKey(sectionId, lessonIndex);
    completionState[key] = completed
      ? { done: true, at: Date.now() }
      : { done: false, at: null };
    saveCompletion(completionState);
  }

  let completionState = loadCompletion();

  function migrateCompletionShape(state) {
    // v1 stored booleans, v2 stores {done, at}
    var out = {};
    try {
      Object.keys(state || {}).forEach(function (k) {
        var v = state[k];
        if (v === true) out[k] = { done: true, at: null };
        else if (v === false) out[k] = { done: false, at: null };
        else if (v && typeof v === "object" && "done" in v) out[k] = v;
      });
    } catch (_) {}
    return out;
  }

  completionState = migrateCompletionShape(completionState);

  // --- Bookmarks State ---
  function loadBookmarks() {
    try {
      const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }

  function saveBookmarks(state) {
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function getBookmarkKey(sectionId, lessonIndex) {
    return (
      (currentCourseEntry ? currentCourseEntry.id : "course") +
      "/" +
      sectionId +
      "/" +
      lessonIndex
    );
  }

  function isBookmarked(sectionId, lessonIndex) {
    return !!bookmarksState[getBookmarkKey(sectionId, lessonIndex)];
  }

  function toggleBookmark(sectionId, lessonIndex) {
    var key = getBookmarkKey(sectionId, lessonIndex);
    if (bookmarksState[key]) {
      delete bookmarksState[key];
    } else {
      bookmarksState[key] = { at: Date.now() };
    }
    saveBookmarks(bookmarksState);
  }

  let bookmarksState = loadBookmarks();

  function setCourse(entry) {
    currentCourseEntry = entry;
    currentCourse = entry ? entry.course : javascriptCourse;
  }

  function escapeHtmlAttr(str) {
    return escapeHtml(str).replace(/"/g, "&quot;");
  }

  function hasLessonContent(lesson) {
    return !!(lesson && (lesson.contentUrl || lesson.Text));
  }

  /* ============================================================
     Per-lesson Notes (minimal, self-contained)
     Storage key format: jslr-v2-notes-{sectionId}/{lessonIndex}
     ============================================================ */
  function getNotesKey(sectionId, lessonIndex) {
    return STORAGE_NS + "-notes-" + sectionId + "/" + lessonIndex;
  }

  function getNotesOpenKey(sectionId, lessonIndex) {
    return STORAGE_NS + "-notes-open-" + sectionId + "/" + lessonIndex;
  }

  function safeGetLocal(key) {
    try {
      return localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }

  function safeSetLocal(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_) {}
  }

  var _notesEl = null;
  var _notesTextarea = null;
  var _notesToggle = null;
  var _notesBody = null;
  var _notesSaveT = null;
  var _notesCurrentKey = null;
  var _notesCurrentOpenKey = null;

  function ensureNotesPanel() {
    if (_notesEl) return _notesEl;
    var wrap = document.createElement("section");
    wrap.className = "lesson-notes";
    wrap.setAttribute("aria-label", "Lesson notes");

    wrap.innerHTML =
      '<div class="lesson-notes-head">' +
      '<button type="button" class="lesson-notes-toggle" aria-expanded="false">' +
      '<span class="lesson-notes-title">Notes</span>' +
      '<span class="lesson-notes-hint">Saved locally</span>' +
      '<span class="lesson-notes-chevron" aria-hidden="true"><i class="fa-solid fa-chevron-down"></i></span>' +
      "</button>" +
      "</div>" +
      '<div class="lesson-notes-body" hidden>' +
      '<textarea class="lesson-notes-textarea" rows="6" placeholder="Write your notes for this lesson…"></textarea>' +
      "</div>";

    _notesEl = wrap;
    _notesToggle = wrap.querySelector(".lesson-notes-toggle");
    _notesBody = wrap.querySelector(".lesson-notes-body");
    _notesTextarea = wrap.querySelector(".lesson-notes-textarea");

    _notesToggle.addEventListener("click", function () {
      var expanded = _notesToggle.getAttribute("aria-expanded") === "true";
      _notesToggle.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (_notesBody) _notesBody.hidden = expanded;
      wrap.classList.toggle("is-open", !expanded);
      if (_notesCurrentOpenKey) {
        safeSetLocal(_notesCurrentOpenKey, expanded ? "0" : "1");
      }
    });

    function scheduleSave() {
      if (!_notesCurrentKey || !_notesTextarea) return;
      if (_notesSaveT) clearTimeout(_notesSaveT);
      _notesSaveT = setTimeout(function () {
        safeSetLocal(_notesCurrentKey, _notesTextarea.value || "");
      }, 150);
    }

    _notesTextarea.addEventListener("input", scheduleSave);
    _notesTextarea.addEventListener("blur", function () {
      if (!_notesCurrentKey || !_notesTextarea) return;
      safeSetLocal(_notesCurrentKey, _notesTextarea.value || "");
    });

    return wrap;
  }

  function mountNotesPanel(sectionId, lessonIndex) {
    ensureNotesPanel();
    _notesCurrentKey = getNotesKey(sectionId, lessonIndex);
    _notesCurrentOpenKey = getNotesOpenKey(sectionId, lessonIndex);
    var saved = safeGetLocal(_notesCurrentKey);
    if (_notesTextarea) _notesTextarea.value = saved || "";

    var open = safeGetLocal(_notesCurrentOpenKey) === "1";
    if (_notesToggle) _notesToggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (_notesBody) _notesBody.hidden = !open;
    if (_notesEl) _notesEl.classList.toggle("is-open", open);

    // Ensure it's placed right below lesson content
    if (_notesEl && _notesEl.parentElement !== contentEl) {
      contentEl.appendChild(_notesEl);
    } else if (_notesEl && _notesEl.parentElement === contentEl) {
      contentEl.appendChild(_notesEl); // move to end
    }
  }

  // Sync in-memory lesson.completed from persisted state
  currentCourse.sections.forEach(function (section) {
    var sectionId = section.id || "";
    getLessons(section).forEach(function (lesson, i) {
      if (lesson.completed !== undefined) {
        lesson.completed = !!completionState[getCompletionKey(sectionId, i)];
      }
    });
  });

  // ── DOM references ──
  const navEl = document.getElementById("lessonNav");
  const contentEl = document.getElementById("lessonContent");
  const progressFill = document.getElementById("progressFill");
  const progressPercent = document.getElementById("progressPercent");
  const sectionSwitcherEl = document.getElementById("sectionSwitcher");
  const sectionBadge = document.getElementById("sectionBadge");
  const sectionHeading = document.getElementById("sectionHeading");
  const sectionSubtext = document.getElementById("sectionSubtext");
  const lessonSearchEl = document.getElementById("lessonSearch");
  const lessonNavFooter = document.getElementById("lessonNavFooter");
  const mainEl = document.getElementById("mainContent");
  const sidebarEl = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  const tocEl = document.getElementById("lessonToc");
  const tocToggle = document.getElementById("tocToggle");
  const tocBackdrop = document.getElementById("tocBackdrop");
  const bookmarksWrap = document.getElementById("sidebarBookmarks");
  const scrollBtn = document.querySelector(".outer");
  const contentWrapEl =
    document.getElementById("contentWrap") || contentEl.parentElement;
  const contentMainEl = document.getElementById("contentMain");
  const lessonBreadcrumbs = document.getElementById("lessonBreadcrumbs");
  const lessonTagsEl = document.getElementById("lessonTags");
  const relatedLessonsEl = document.getElementById("relatedLessons");
  const relatedLessonsGrid = document.getElementById("relatedLessonsGrid");

  if (!navEl || !contentEl) {
    console.error("App: Required DOM elements not found.");
    return;
  }

  let currentSectionIndex = 0;
  let currentLessonIndex = 0;
  // Fallback to first section if currentSectionIndex is out of bounds
  let lessons = getLessons(currentCourse.sections[currentSectionIndex] || currentCourse.sections[0]);

  function getSection() {
    return currentCourse.sections[currentSectionIndex];
  }

  function getSectionId() {
    return getSection().id || String(currentSectionIndex);
  }

  let _isInternalHashChange = false;
  function setHash(sectionId, lessonSlug) {
    var hash =
      (sectionId || getSectionId()) +
      "/" +
      (lessonSlug || getLessonSlug(lessons[currentLessonIndex]));
    if (window.location.hash !== "#" + hash) {
      _isInternalHashChange = true;
      window.location.hash = hash;
    }
  }

  function parseHash() {
    const hash = (window.location.hash || "").replace(/^#/, "");
    const [sectionId, lessonSlug] = hash.split("/");
    return { sectionId: sectionId || null, lessonSlug: lessonSlug || null };
  }

  function applyHash() {
    const { sectionId, lessonSlug } = parseHash();
    if (!sectionId) return false;
    const sectionIndex = currentCourse.sections.findIndex(function (s) {
      return (s.id || "") === sectionId;
    });
    if (sectionIndex === -1) return false;
    const section = currentCourse.sections[sectionIndex];
    const sectionLessons = getLessons(section);
    const lessonIndex = sectionLessons.findIndex(function (l) {
      return getLessonSlug(l) === lessonSlug;
    });
    if (lessonIndex === -1) return false;
    currentSectionIndex = sectionIndex;
    currentLessonIndex = lessonIndex;
    lessons = sectionLessons;
    return true;
  }

  function getSectionProgress(sectionIndex) {
    var section = currentCourse.sections[sectionIndex];
    if (!section) return { completed: 0, total: 0 };
    var sectionId = section.id || String(sectionIndex);
    var list = getLessons(section);
    var total = list.length;
    var completed = 0;
    for (var i = 0; i < total; i++) {
      if (completionState[getCompletionKey(sectionId, i)]) completed++;
    }
    return { completed: completed, total: total };
  }

  // ── Section switcher (2-col cards with progress) ──
  function buildSectionSwitcher() {
    if (!sectionSwitcherEl) return;
    sectionSwitcherEl.innerHTML = "";
    currentCourse.sections.forEach(function (section, idx) {
      var isActive = idx === currentSectionIndex;
      var progress = getSectionProgress(idx);
      var card = document.createElement("button");
      card.type = "button";
      card.setAttribute("role", "tab");
      card.className = "section-card" + (isActive ? " active" : "");
      card.setAttribute("aria-selected", isActive);
      card.setAttribute("data-section-index", idx);
      var pct = progress.total
        ? Math.round((progress.completed / progress.total) * 100)
        : 0;
      card.setAttribute("title", section.title || "");
      card.innerHTML =
        '<span class="section-card-title">' +
        escapeHtml(section.title) +
        "</span>" +
        '<span class="section-card-meta">' +
        progress.completed +
        "/" +
        progress.total +
        " lessons</span>" +
        '<div class="section-card-progress-track"><div class="section-card-progress-fill" style="width:' +
        pct +
        '%"></div></div>';
      card.addEventListener("click", function () {
        currentSectionIndex = idx;
        lessons = getLessons(section);
        var resumeIndex = getResumeIndex(idx, getLessons(section));
        setHash(section.id || idx, getLessonSlug(lessons[resumeIndex]));
        updateSectionInfo();
        buildSectionSwitcher();
        if (lessonSearchEl) lessonSearchEl.value = "";
        buildLessonList();
        selectLesson(resumeIndex);
      });
      card.addEventListener("keydown", function (e) {
        var items = sectionSwitcherEl.querySelectorAll(".section-card");
        var numItems = items.length;
        if (!numItems) return;
        var cols = 2; // Grid has 2 columns
        if (e.key === "ArrowRight" && idx < numItems - 1) {
          e.preventDefault();
          items[idx + 1].focus();
        } else if (e.key === "ArrowLeft" && idx > 0) {
          e.preventDefault();
          items[idx - 1].focus();
        } else if (e.key === "ArrowDown" && idx + cols < numItems) {
          e.preventDefault();
          items[idx + cols].focus();
        } else if (e.key === "ArrowUp" && idx - cols >= 0) {
          e.preventDefault();
          items[idx - cols].focus();
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
      sectionSwitcherEl.appendChild(card);
    });
  }

  function updateSectionInfo() {
    const section = getSection();
    if (!section) return;
    if (sectionBadge)
      sectionBadge.textContent = "Chapter No. " + (currentSectionIndex + 1);
    if (sectionHeading) sectionHeading.textContent = section.title;
    if (sectionSubtext) sectionSubtext.textContent = section.description || "";
  }

  let searchIndex = [];
  let fuse = null;

  async function initSearch() {
    try {
      const res = await fetch('data/search_index.json');
      if (res.ok) {
        searchIndex = await res.json();
        fuse = new Fuse(searchIndex, {
          keys: ['title', 'snippet'],
          threshold: 0.3,
          includeMatches: true
        });
      }
    } catch (e) {
      console.warn("Failed to load search index", e);
    }
  }
  
  // Call init early
  initSearch();

  // ── Sidebar Tabs (Sections vs Bookmarks) ──
  const tabSections = document.getElementById("tabSections");
  const tabBookmarks = document.getElementById("tabBookmarks");
  const viewSections = document.getElementById("viewSections");
  const viewBookmarks = document.getElementById("viewBookmarks");

  if (tabSections && tabBookmarks) {
    tabSections.addEventListener("click", function () {
      tabSections.classList.add("active");
      tabSections.setAttribute("aria-selected", "true");
      tabBookmarks.classList.remove("active");
      tabBookmarks.setAttribute("aria-selected", "false");
      viewSections.hidden = false;
      viewBookmarks.hidden = true;
    });

    tabBookmarks.addEventListener("click", function () {
      tabBookmarks.classList.add("active");
      tabBookmarks.setAttribute("aria-selected", "true");
      tabSections.classList.remove("active");
      tabSections.setAttribute("aria-selected", "false");
      viewSections.hidden = true;
      viewBookmarks.hidden = false;
      buildBookmarksView();
    });
  }

  function buildBookmarksView() {
    if (!viewBookmarks) return;
    viewBookmarks.innerHTML = "";

    const keys = Object.keys(bookmarksState);
    if (keys.length === 0) {
      const msg = document.createElement("p");
      msg.className = "sidebar-no-results";
      msg.textContent = "No bookmarks yet. Click the bookmark icon in a lesson to save it here.";
      viewBookmarks.appendChild(msg);
      return;
    }

    // Sort by most recently bookmarked first
    keys.sort(function (a, b) {
      return (bookmarksState[b].at || 0) - (bookmarksState[a].at || 0);
    });

    keys.forEach(function (key) {
      // Key format: courseId/sectionId/lessonIndex
      const parts = key.split("/");
      if (parts.length < 3) return;
      
      const courseId = parts[0];
      const sectionId = parts[1];
      const lessonIndexStr = parts[2];
      const parsedLessonIndex = parseInt(lessonIndexStr, 10);

      // We only support current course bookmarks in UI for now, could expand later
      if (currentCourseEntry && currentCourseEntry.id !== courseId) return;

      const targetSection = currentCourse.sections.find(function(s) {
        return (s.id || "") === sectionId || currentCourse.sections.indexOf(s) === parseInt(sectionId, 10);
      });

      if (!targetSection) return;

      const sectionLessons = getLessons(targetSection);
      const lesson = sectionLessons[parsedLessonIndex];
      if (!lesson) return;

      const btn = document.createElement("button");
      btn.className = "lesson-item";
      // Allow multi-wrap alignment
      btn.style.height = "auto";
      btn.style.alignItems = "flex-start";
      btn.style.paddingTop = "var(--sp-2)";
      btn.style.paddingBottom = "var(--sp-2)";

      const flexCol = document.createElement("div");
      flexCol.style.display = "flex";
      flexCol.style.flexDirection = "column";
      flexCol.style.textAlign = "left";
      flexCol.style.gap = "2px";

      const titleSpan = document.createElement("span");
      titleSpan.className = "lesson-title-text";
      titleSpan.textContent = lesson.title;

      const contextSpan = document.createElement("span");
      contextSpan.style.fontSize = "10.5px";
      contextSpan.style.color = "var(--text-muted)";
      contextSpan.textContent = targetSection.title;

      flexCol.appendChild(titleSpan);
      flexCol.appendChild(contextSpan);

      btn.appendChild(flexCol);

      btn.addEventListener("click", function () {
        currentSectionIndex = currentCourse.sections.indexOf(targetSection);
        lessons = sectionLessons;
        updateSectionInfo();
        buildSectionSwitcher();
        selectLesson(parsedLessonIndex);

        if (window.innerWidth <= 768 && sidebarEl) {
          sidebarEl.classList.remove("is-open");
          if (sidebarBackdrop) sidebarBackdrop.classList.remove("is-visible");
          if (sidebarToggle)
            sidebarToggle.setAttribute("aria-expanded", "false");
        }
      });

      viewBookmarks.appendChild(btn);
    });
  }

  function buildLessonList() {
    navEl.innerHTML = "";
    const query = ((lessonSearchEl && lessonSearchEl.value) || "")
      .trim();
      
    if (query && fuse) {
      // Global search active
      const results = fuse.search(query);
      if (results.length === 0) {
        const msg = document.createElement("p");
        msg.className = "sidebar-no-results";
        msg.textContent = "No lessons match your search.";
        navEl.appendChild(msg);
        return;
      }
      
      const searchHeader = document.createElement("div");
      searchHeader.className = "sidebar-search-results-header";
      searchHeader.style.padding = "0.5rem 1rem";
      searchHeader.style.fontSize = "0.75rem";
      searchHeader.style.color = "var(--text-muted)";
      searchHeader.style.fontWeight = "600";
      searchHeader.style.textTransform = "uppercase";
      searchHeader.style.letterSpacing = "0.05em";
      searchHeader.textContent = "Search Results";
      navEl.appendChild(searchHeader);

      results.forEach(result => {
        const item = result.item;
        const btn = document.createElement("button");
        btn.className = "lesson-item search-result-item";
        
        // Find if it's the current active globally
        if (item.sectionId === getSectionId() && item.lessonIndex === currentLessonIndex) {
            btn.classList.add("active");
        }
        
        btn.setAttribute("tabindex", "0");
        
        const titleSpan = document.createElement("span");
        titleSpan.className = "lesson-title-text";
        titleSpan.textContent = item.title;
        
        const sectionContext = document.createElement("span");
        sectionContext.style.display = "block";
        sectionContext.style.fontSize = "0.75rem";
        sectionContext.style.color = "var(--text-muted)";
        sectionContext.style.marginTop = "4px";
        sectionContext.style.overflow = "hidden";
        sectionContext.style.textOverflow = "ellipsis";
        sectionContext.style.whiteSpace = "nowrap";
        
        // Find the section title for context
        const sectionObj = currentCourse.sections.find(s => s.id === item.sectionId || (!s.id && currentCourse.sections.indexOf(s) === parseInt(item.sectionId.replace("section-", ""))));
        if (sectionObj) {
            sectionContext.textContent = sectionObj.title;
        }

        btn.appendChild(titleSpan);
        btn.appendChild(sectionContext);
        navEl.appendChild(btn);

        btn.addEventListener("click", function () {
            // Navigate to the found lesson
            const targetSectionIdx = currentCourse.sections.indexOf(sectionObj);
            if (targetSectionIdx !== -1) {
                currentSectionIndex = targetSectionIdx;
                lessons = getLessons(currentCourse.sections[currentSectionIndex]);
                updateSectionInfo();
                buildSectionSwitcher();
                selectLesson(item.lessonIndex);
                
                if (window.innerWidth <= 768 && sidebarEl) {
                  sidebarEl.classList.remove("is-open");
                  if (sidebarBackdrop) sidebarBackdrop.classList.remove("is-visible");
                  if (sidebarToggle)
                    sidebarToggle.setAttribute("aria-expanded", "false");
                }
            }
        });
      });
      return;
    }

    // Normal lesson list for the active section
    const filtered = lessons;

    if (filtered.length === 0) {
      const msg = document.createElement("p");
      msg.className = "sidebar-no-results";
      msg.textContent = "No lessons.";
      navEl.appendChild(msg);
      return;
    }

    filtered.forEach(function (_, listIndex) {
      const lessonIndex = lessons.indexOf(filtered[listIndex]);
      const lesson = lessons[lessonIndex];
      var hasContent = hasLessonContent(lesson);
      const btn = document.createElement("button");
      btn.className =
        "lesson-item" +
        (lessonIndex === currentLessonIndex ? " active" : "") +
        (isCompleted(getSectionId(), lessonIndex) ? " completed" : "") +
        (hasContent ? "" : " no-content");
      btn.setAttribute("data-lesson-index", lessonIndex);
      btn.setAttribute("tabindex", "0");
      btn.setAttribute(
        "aria-label",
        "Lesson " +
          (lessonIndex + 1) +
          ": " +
          lesson.title +
          (hasContent ? "" : " (coming soon)"),
      );

      const numSpan = document.createElement("span");
      numSpan.className = "lesson-num";
      numSpan.textContent = String(lessonIndex + 1).padStart(2, "0");
      numSpan.setAttribute("aria-hidden", "true");

      const titleSpan = document.createElement("span");
      titleSpan.className = "lesson-title-text";
      titleSpan.textContent = lesson.title;

      if (!hasContent) {
        var soonSpan = document.createElement("span");
        soonSpan.className = "lesson-soon";
        soonSpan.textContent = "soon";
        soonSpan.setAttribute("aria-hidden", "true");
        btn.appendChild(numSpan);
        btn.appendChild(titleSpan);
        btn.appendChild(soonSpan);
      } else {
        var iconSpan = document.createElement("span");
        iconSpan.className = "lesson-completed-icon";
        iconSpan.setAttribute("aria-hidden", "true");
        iconSpan.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        btn.appendChild(numSpan);
        btn.appendChild(titleSpan);
        btn.appendChild(iconSpan);
      }
      navEl.appendChild(btn);

      btn.addEventListener("click", function () {
        if (!hasContent) return;
        selectLesson(lessonIndex);
        if (window.innerWidth <= 768 && sidebarEl) {
          sidebarEl.classList.remove("is-open");
          if (sidebarBackdrop) sidebarBackdrop.classList.remove("is-visible");
          if (sidebarToggle)
            sidebarToggle.setAttribute("aria-expanded", "false");
        }
      });
      btn.addEventListener("keydown", function (e) {
        if (!hasContent && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          return;
        }
        var items = navEl.querySelectorAll(
          '.lesson-item:not([style*="display: none"])',
        );
        if (!items.length) items = navEl.querySelectorAll(".lesson-item");
        var idx = Array.prototype.indexOf.call(items, btn);
        if (e.key === "ArrowDown" && idx < items.length - 1) {
          e.preventDefault();
          items[idx + 1].focus();
        } else if (e.key === "ArrowUp" && idx > 0) {
          e.preventDefault();
          items[idx - 1].focus();
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  // ── Render lesson content ──
  function renderContent(lesson) {
    if (!lesson.Text) {
      return (
        '<div class="placeholder-content">' +
        '<div class="placeholder-icon">🚧</div>' +
        '<h2 class="placeholder-title">' +
        escapeHtml(lesson.title) +
        "</h2>" +
        '<p class="placeholder-text">This lesson is currently being written. Check back soon for the full content.</p>' +
        '<span class="placeholder-tag">Coming Soon</span>' +
        "</div>"
      );
    }
    const text = lesson.Text.trim();
    if (text.startsWith("<")) {
      // Normalize whitespace inside code blocks (removes the blank line/indent
      // right after the <code> tag in template literals).
      return text.replace(
        /<pre class="code-block"><code>\s+/g,
        '<pre class="code-block"><code>',
      );
    }
    return renderPlainText(text);
  }

  function renderPlainText(text) {
    const lines = text.split("\n");
    const blocks = [];
    const bullets = [];

    function flushBullets() {
      if (bullets.length > 0) {
        const items = bullets
          .map(function (b) {
            return (
              '<li class="bullet-item"><span class="bullet-dot" aria-hidden="true"></span><span>' +
              escapeHtml(b) +
              "</span></li>"
            );
          })
          .join("\n");
        blocks.push('<ul class="bullet-list">' + items + "</ul>");
        bullets.length = 0;
      }
    }

    for (var i = 0; i < lines.length; i++) {
      var trimmed = lines[i].trim();
      if (!trimmed) continue;
      if (trimmed.indexOf("• ") === 0) {
        bullets.push(trimmed.slice(2));
      } else if (trimmed.indexOf("> ") === 0) {
        flushBullets();
        blocks.push(
          "<blockquote>" + escapeHtml(trimmed.slice(2)) + "</blockquote>",
        );
      } else {
        flushBullets();
        blocks.push("<p>" + escapeHtml(trimmed) + "</p>");
      }
    }
    flushBullets();
    return '<div class="rendered-text">' + blocks.join("\n") + "</div>";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function updateProgress() {
    var completedCount = lessons.filter(function (_, i) {
      return isCompleted(getSectionId(), i);
    }).length;
    const pct = lessons.length
      ? Math.round((completedCount / lessons.length) * 100)
      : 0;
    if (progressFill) progressFill.style.width = pct + "%";
    if (progressPercent) progressPercent.textContent = pct + "%";
  }

  function updatePrevNext() {
    if (!lessonNavFooter) return;
    const prevIndex = currentLessonIndex - 1;
    const nextIndex = currentLessonIndex + 1;
    const prevLesson = prevIndex >= 0 ? lessons[prevIndex] : null;
    const nextLesson = nextIndex < lessons.length ? lessons[nextIndex] : null;

    var completed = isCompleted(getSectionId(), currentLessonIndex);
    lessonNavFooter.innerHTML =
      '<div class="lesson-nav-prev">' +
      (prevLesson
        ? '<button type="button" class="btn-prev" aria-label="Previous lesson">' +
          '<i class="fa-solid fa-arrow-left"></i> ' +
          escapeHtml(prevLesson.title) +
          "</button>"
        : '<button type="button" class="btn-prev" disabled>Previous</button>') +
      "</div>" +
      '<div class="mark-complete-wrap">' +
      '<button type="button" class="mark-complete-btn' +
      (completed ? " completed" : "") +
      '" id="markCompleteBtn" aria-pressed="' +
      completed +
      '">' +
      (completed
        ? '<i class="fa-solid fa-check-circle"></i> Completed'
        : '<i class="fa-regular fa-circle"></i> Mark as complete') +
      "</button>" +
      "</div>" +
      '<div class="lesson-nav-next">' +
      (nextLesson
        ? '<button type="button" class="btn-next" aria-label="Next lesson">' +
          escapeHtml(nextLesson.title) +
          ' <i class="fa-solid fa-arrow-right"></i></button>'
        : '<button type="button" class="btn-next" disabled>Next</button>') +
      "</div>";

    var prevBtn = lessonNavFooter.querySelector(".btn-prev");
    var nextBtn = lessonNavFooter.querySelector(".btn-next");
    var markBtn = document.getElementById("markCompleteBtn");
    if (prevBtn && prevLesson)
      prevBtn.addEventListener("click", function () {
        selectLesson(prevIndex);
      });
    if (nextBtn && nextLesson)
      nextBtn.addEventListener("click", function () {
        selectLesson(nextIndex);
      });
    if (markBtn) {
      markBtn.addEventListener("click", function () {
        var completedNew = !isCompleted(getSectionId(), currentLessonIndex);
        setCompleted(getSectionId(), currentLessonIndex, completedNew);
        if (lessons[currentLessonIndex].completed !== undefined)
          lessons[currentLessonIndex].completed = completedNew;
        markBtn.classList.toggle("completed", completedNew);
        markBtn.setAttribute("aria-pressed", completedNew);
        markBtn.innerHTML = completedNew
          ? '<i class="fa-solid fa-check-circle"></i> Completed'
          : '<i class="fa-regular fa-circle"></i> Mark as complete';
        updateProgress();
        buildLessonList();
        buildSectionSwitcher();
      });
    }
  }

  async function selectLesson(index) {
    if (index < 0 || index >= lessons.length) return;
    currentLessonIndex = index;
    lastVisitedLesson[currentSectionIndex] = index;
    var lesson = lessons[currentLessonIndex];

    setHash(getSectionId(), getLessonSlug(lesson));

    // Avoid full rebuild on every click (preserves keyboard focus)
    var nextActive = navEl.querySelector('[data-lesson-index="' + index + '"]');
    if (nextActive) {
      var prevActive = navEl.querySelector(".lesson-item.active");
      if (prevActive) prevActive.classList.remove("active");
      nextActive.classList.add("active");
    } else {
      buildLessonList();
    }

    try {
      contentEl.innerHTML = '<div class="placeholder-content"><p class="placeholder-text">Loading...</p></div>';
      let htmlText = "";
      if (lesson.contentUrl) {
        const response = await fetch(lesson.contentUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        htmlText = await response.text();
      }
      contentEl.innerHTML = renderContent({ ...lesson, Text: htmlText });
    } catch (err) {
      contentEl.innerHTML =
        '<div class="placeholder-content"><p class="placeholder-text">Failed to load this lesson. Please try again.</p></div>';
      console.error("renderContent error:", err);
    }

    // Per-lesson notes panel (always available, saved per section/lesson)
    mountNotesPanel(getSectionId(), currentLessonIndex);
    if (contentMainEl) {
      contentMainEl.classList.remove("animating");
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          contentMainEl.classList.add("animating");
        });
      });
    }

    (contentWrapEl || mainEl).scrollTo({ top: 0, behavior: "smooth" });

    updatePrevNext();
    updateProgress();

    document.title = (lesson.title || "Lesson") + " — JavaScript Guide";

    injectCopyButtons();
    injectBookmarkHeaderButton();
    applyHighlighting();
    renderBreadcrumbs(lesson);
    renderTagsAndRelatedLessons(lesson, currentSectionIndex, currentLessonIndex);
    buildLessonToc();
  }

  function renderBreadcrumbs(lesson) {
    if (!lessonBreadcrumbs) return;
    var courseTitle = currentCourse.title || "Course";
    var section = getSection();
    var sectionTitle = section ? section.title : "Chapter";
    var lessonTitle = lesson.title || "Lesson";

    lessonBreadcrumbs.innerHTML =
      '<span class="breadcrumb-item">' + escapeHtml(courseTitle) + '</span>' +
      '<span class="breadcrumb-sep"><i class="fa-solid fa-chevron-right"></i></span>' +
      '<span class="breadcrumb-item">' + escapeHtml(sectionTitle) + '</span>' +
      '<span class="breadcrumb-sep"><i class="fa-solid fa-chevron-right"></i></span>' +
      '<span class="breadcrumb-item active">' + escapeHtml(lessonTitle) + '</span>';
  }

  function renderTagsAndRelatedLessons(lesson, sIndex, lIndex) {
    // 1. Tags
    if (lessonTagsEl) {
      if (lesson.tags && lesson.tags.length > 0) {
        lessonTagsEl.innerHTML = lesson.tags.map(function(t) {
          return '<span class="lesson-tag">#' + escapeHtml(t) + '</span>';
        }).join('');
        lessonTagsEl.style.display = "flex";
      } else {
        lessonTagsEl.style.display = "none";
        lessonTagsEl.innerHTML = "";
      }
    }

    // 2. Related Lessons
    if (relatedLessonsEl && relatedLessonsGrid) {
      var allLessons = [];
      
      currentCourse.sections.forEach(function(sec, secIdx) {
        var secLessons = getLessons(sec);
        secLessons.forEach(function(les, lesIdx) {
          if (secIdx === sIndex && lesIdx === lIndex) return; // skip current
          if (!les.tags || !les.tags.length) return;
          
          var overlapCount = 0;
          if (lesson.tags) {
            les.tags.forEach(function(t) {
              if (lesson.tags.indexOf(t) !== -1) overlapCount++;
            });
          }
          if (overlapCount > 0) {
             allLessons.push({
               section: sec,
               lesson: les,
               overlap: overlapCount
             });
          }
        });
      });

      // Sort by overlap descending, then by title predictability
      allLessons.sort(function(a, b) {
        if (b.overlap !== a.overlap) {
          return b.overlap - a.overlap;
        }
        return a.lesson.title.localeCompare(b.lesson.title);
      });

      var topRelated = allLessons.slice(0, 3);
      if (topRelated.length > 0) {
        relatedLessonsEl.style.display = "block";
        relatedLessonsGrid.innerHTML = topRelated.map(function(item) {
          var hash = "#" + (item.section.id || "") + "/" + getLessonSlug(item.lesson);
          return '<a href="' + hash + '" class="related-lesson-card">' +
            '<span class="related-lesson-section">' + escapeHtml(item.section.title) + '</span>' +
            '<span class="related-lesson-title">' + escapeHtml(item.lesson.title) + '</span>' +
          '</a>';
        }).join('');
      } else {
        relatedLessonsEl.style.display = "none";
        relatedLessonsGrid.innerHTML = "";
      }
    }
  }

  function injectBookmarkHeaderButton() {
    // Inject the bookmark button inside content-main near the title or at top
    // Since content varies, we can insert it right before the wrapper or absolute position it.
    var wrap = contentEl.querySelector(".placeholder-title, .rendered-text h2"); 
    
    // We create a persistent bookmark button container if it doesn't exist
    var existingBtn = document.getElementById("lessonBookmarkBtn");
    if (existingBtn) existingBtn.remove();
    
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "lessonBookmarkBtn";
    btn.className = "lesson-bookmark-btn " + (isBookmarked(getSectionId(), currentLessonIndex) ? "bookmarked" : "");
    btn.setAttribute("aria-label", "Bookmark lesson");
    btn.innerHTML = isBookmarked(getSectionId(), currentLessonIndex) 
      ? '<i class="fa-solid fa-bookmark"></i>' 
      : '<i class="fa-regular fa-bookmark"></i>';
      
    btn.addEventListener("click", function () {
      toggleBookmark(getSectionId(), currentLessonIndex);
      var bookmarked = isBookmarked(getSectionId(), currentLessonIndex);
      
      btn.classList.toggle("bookmarked", bookmarked);
      btn.innerHTML = bookmarked 
        ? '<i class="fa-solid fa-bookmark"></i>' 
        : '<i class="fa-regular fa-bookmark"></i>';
    });
    
    // Insert at top of contentEl
    contentEl.insertBefore(btn, contentEl.firstChild);
  }

  function injectCopyButtons() {
    var blocks = contentEl.querySelectorAll(".code-block");
    blocks.forEach(function (block) {
      var existing = block.querySelector(".code-copy-btn");
      if (existing) return;
      var codeEl = block.querySelector("code") || block;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "code-copy-btn";
      btn.setAttribute("aria-label", "Copy code");
      btn.innerHTML = '<i class="fa-regular fa-copy" aria-hidden="true"></i>';
      block.style.position = "relative";
      btn.addEventListener("click", function () {
        var text = (codeEl.textContent || "").trim();
        copyText(text).then(function (ok) {
          if (ok) {
            btn.innerHTML =
              '<i class="fa-solid fa-check" aria-hidden="true"></i>';
          } else {
            btn.innerHTML =
              '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
          }
          setTimeout(function () {
            btn.innerHTML =
              '<i class="fa-regular fa-copy" aria-hidden="true"></i>';
          }, 2000);
        });
      });
      block.appendChild(btn);
    });
  }

  function copyText(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard
          .writeText(text)
          .then(function () {
            return true;
          })
          .catch(function () {
            return legacyCopy(text);
          });
      }
      return Promise.resolve(legacyCopy(text));
    } catch (_) {
      return Promise.resolve(false);
    }
  }

  function legacyCopy(text) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return !!ok;
    } catch (_) {
      return false;
    }
  }

  function buildLessonToc() {
    var tocEl = document.getElementById("lessonToc");
    if (!tocEl) return;

    // Disconnect any previous observer before rebuilding
    if (_tocObserver) {
      _tocObserver.disconnect();
      _tocObserver = null;
    }

    var titles = contentEl.querySelectorAll("h2.section-title");
    tocEl.innerHTML = "";

    if (titles.length === 0) {
      tocEl.classList.remove("is-visible");
      return;
    }

    var tocButtons = [];

    titles.forEach(function (h2, i) {
      var id = "doc-toc-h2-" + i;
      h2.id = id;

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "toc-link";
      btn.textContent = h2.textContent.replace(/^\s*/, "").trim(); // strip leading whitespace from ::before pseudo
      btn.setAttribute("data-toc-target", id);

      btn.addEventListener("click", function () {
        h2.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      tocEl.appendChild(btn);
      tocButtons.push(btn);
    });

    tocEl.classList.add("is-visible");

    // Intersection Observer: highlight the TOC entry for the visible heading
    var scrollRoot = contentWrapEl || mainEl;

    var _tocDebounceT = null;
    var _lastActiveId = null;
    _tocObserver = new IntersectionObserver(
      function (entries) {
        if (_tocDebounceT) clearTimeout(_tocDebounceT);
        _tocDebounceT = setTimeout(function () {
          var nextId = null;
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
              nextId = entries[i].target.id;
              break;
            }
          }
          if (!nextId || nextId === _lastActiveId) return;
          _lastActiveId = nextId;
          tocButtons.forEach(function (b) {
            b.classList.remove("toc-active");
          });
          var btn = tocEl.querySelector(
            '[data-toc-target="' + nextId + '"]',
          );
          if (btn) btn.classList.add("toc-active");
        }, 80);
      },
      {
        root: scrollRoot,
        // Fire when heading enters the top 30% of the scroll container
        rootMargin: "0px 0px -70% 0px",
        threshold: 0,
      },
    );

    titles.forEach(function (h2) {
      _tocObserver.observe(h2);
    });
  }

  // ── Search ──
  if (lessonSearchEl) {
    lessonSearchEl.addEventListener("input", function () {
      buildLessonList();
    });
  }

  // ── Scroll-to-top button (content-wrap is the scroll container) ──
  var scrollContainer = contentWrapEl || mainEl;
  if (scrollBtn && scrollContainer) {
    scrollContainer.addEventListener("scroll", function () {
      scrollBtn.classList.toggle("is-visible", scrollContainer.scrollTop > 300);
    });
    scrollBtn.addEventListener("click", function () {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ── Mobile sidebar ──
  if (sidebarToggle && sidebarEl && sidebarBackdrop) {
    function openSidebar() {
      sidebarEl.classList.add("is-open");
      sidebarBackdrop.classList.add("is-visible");
      sidebarToggle.setAttribute("aria-expanded", "true");
    }
    function closeSidebar() {
      sidebarEl.classList.remove("is-open");
      sidebarBackdrop.classList.remove("is-visible");
      sidebarToggle.setAttribute("aria-expanded", "false");
    }
    sidebarToggle.addEventListener("click", function () {
      if (sidebarEl.classList.contains("is-open")) closeSidebar();
      else openSidebar();
    });
    sidebarBackdrop.addEventListener("click", closeSidebar);
  }

  // ── Mobile TOC drawer ──
  if (tocToggle && tocEl && tocBackdrop) {
    function openToc() {
      tocEl.classList.add("is-open");
      tocBackdrop.classList.add("is-visible");
      tocToggle.setAttribute("aria-expanded", "true");
    }
    function closeToc() {
      tocEl.classList.remove("is-open");
      tocBackdrop.classList.remove("is-visible");
      tocToggle.setAttribute("aria-expanded", "false");
    }
    tocToggle.addEventListener("click", function () {
      if (tocEl.classList.contains("is-open")) closeToc();
      else openToc();
    });
    tocBackdrop.addEventListener("click", closeToc);
  }

  // ── Init: apply hash or defaults ──
  if (!applyHash()) {
    setHash(getSectionId(), getLessonSlug(lessons[0]));
  }
  buildSectionSwitcher();
  updateSectionInfo();
  buildLessonList();
  selectLesson(currentLessonIndex);

  window.addEventListener("hashchange", function () {
    if (_isInternalHashChange) {
      _isInternalHashChange = false;
      return;
    }
    if (applyHash()) {
      updateSectionInfo();
      buildSectionSwitcher();
      buildLessonList();
      selectLesson(currentLessonIndex);
    }
  });
})();
