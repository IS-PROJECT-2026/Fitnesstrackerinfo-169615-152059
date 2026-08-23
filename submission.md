# Project Submission Report

## 1. Student Details

- **Full Name:** Zyll Terryline Osogo Mona    
- 
**GitHub Username:** terrylinezyll, taneii
- **Email:** zyll.osogo@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/Fitnesstrackerinfo-169615-152059/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/Fitnesstrackerinfo-169615-152059/commit/4336b872bd553f7c04d96d70719179c44fd4cd0c
- **Why this one?** The commit uses the correct `fix:` type for a conflict resolution rather than defaulting to `feat`, has a clear imperative subject under 50 characters, and its footer references the PR that closed the merge conflict. It reads as intentional rather than automated.

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/Fitnesstrackerinfo-169615-152059/commit/e208335d38672332640542ea34d09ea63092881a
- **What happened and how did you recover?** My original workflow assumed two reviewers approving each other's PRs, but my partner became unavailable partway through the project. I had to adjust the branch protection ruleset to require zero approvals so I could self-merge as a solo contributor, reassign every open issue and PR to myself, and take on both sides of the review flow. The commit history from that point onward is entirely mine, with self-reviews replacing paired reviews.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/Fitnesstrackerinfo-169615-152059/commit/b1895799b0dfa43181e2512a8c7368f0b7575c98
- **What did you check before merging?** I opened the Files changed tab and read the full diff line by line, confirmed the conflict markers were fully removed, checked that the resolved version of `sources.html` matched my intended decision to preserve the file rather than accept the deletion, and verified the linked issue would close automatically on merge via the footer reference.

### D. One Thing You Would Do Differently

- **What would you change?** I would spread issue creation across the life of the project rather than creating all 19 issues in the first sitting. Real projects surface work as it becomes clear; batching everything up front makes the board timestamps look inauthentic and removed opportunities to add issues discovered mid-development.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/Fitnesstrackerinfo-169615-152059/milestones


---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues
![Uploading Screenshot 2026-08-20 123336.png…]()



* **Caption:** Three milestones — Foundation & Shell, Core Explainer Content, and Interaction, Polish & Docs — each with granular issues attached at creation and progress tracked through the milestone bar.

### B. Project Board

<img width="1139" height="895" alt="Screenshot 2026-08-23 232119" src="https://github.com/user-attachments/assets/33d05b8f-04c9-4862-ae7e-94116e51f3b8" />


* **Caption:** The Kanban board tracking all 19 issues across the three status columns as work progressed through the project.

### C. Branching Architecture
<img width="961" height="826" alt="Screenshot 2026-08-24 010011" src="https://github.com/user-attachments/assets/0df8bca4-9edf-4d06-bad9-37ed09d7814a" />


* **Caption:** Feature branches follow the conventional prefix pattern (`feat/`, `fix/`, `style/`, `docs/`, `chore/`) with the issue number and a short description, providing traceability from branch to issue.

### D. Pull Requests & Traceability
<img width="1216" height="741" alt="Screenshot 2026-08-23 234720" src="https://github.com/user-attachments/assets/ba9b0891-1b3e-43fc-97d4-397063a2317f" />



* **Caption:** Pull request showing the linked issue in the Development sidebar and the merge commit tying the work back to the issue that motivated it.

---

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology

**What cause did you use?** Same-line content conflict — two branches modifying the same line of the same file in incompatible ways.

#### Step 1: Generating the Clash

<img width="1672" height="836" alt="Screenshot 2026-08-23 233917" src="https://github.com/user-attachments/assets/e045554a-5cf4-4184-b074-3e664fcc61b0" />


* **Caption:** GitHub reporting the merge conflict on the pull request for `conflict/1-hero-heading-b` after the earlier `conflict/1-hero-heading-a` had merged the same `<h1>` differently into `main`.

#### Step 2: Inside the Code Editor (Conflict Markers)

<img width="1427" height="774" alt="Screenshot 2026-08-23 234222" src="https://github.com/user-attachments/assets/beba11d3-f26c-48af-8b5b-29f08375e939" />


* **Caption:** VS Code showing the raw `<<<<<<< HEAD`, `=======`, and `>>>>>>>` markers Git wrote into `index.html`. Both branches had rewritten the hero heading to make different editorial points. Resolution kept the second version because it more directly framed the site's purpose.

#### Step 3: Resolution & Clean Merge

<img width="1216" height="741" alt="Screenshot 2026-08-23 234720" src="https://github.com/user-attachments/assets/02379155-f07e-4e22-83d4-1d2c24f0ea05" />

* **Caption:** The pull request in its merged state after the conflict was resolved locally, the fix committed, and `main` brought back into a linear history.

---

### Conflict 2 — Different Cause

**What cause did you use?** Modify/delete conflict — one branch deleted a file while another branch modified it.

**Why does this cause trigger a conflict?** Git cannot automatically decide whether the deletion was intentional cleanup (in which case the edits should be discarded) or whether the edits should take precedence (in which case the deletion should be reversed). It marks the file as conflicted and asks the developer to choose.

<img width="1634" height="816" alt="Screenshot 2026-08-24 000825" src="https://github.com/user-attachments/assets/331ad11b-e093-4636-aa0c-f4294ffdfb4f" />



* **Caption:** The `sources.html` file was deleted on `main` via `conflict/2-delete-sources` while `conflict/2-edit-sources` had added new paragraphs to it. Resolved by keeping the file with its edits intact.

---

### Conflict 3 — Different Cause

**What cause did you use?** Add/add conflict — two branches independently created a file at the same path with different content.

**Why does this cause trigger a conflict?** There is no shared ancestor version of the file for Git to use as a merge base, so every line of one branch's version competes with every line of the other's. Git flags the whole file as conflicted.

<img width="1563" height="829" alt="Screenshot 2026-08-24 002348" src="https://github.com/user-attachments/assets/07d77b2f-543b-4bb9-b7d3-d2770cdd3c5c" />


* **Caption:** Both `conflict/3-tokens-a` and `conflict/3-tokens-b` created a new `tokens.css` at the repo root with entirely different CSS custom properties. Resolved by combining both token sets in the final version.

---

## 6. Feedback & Evaluation

- [x] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)
