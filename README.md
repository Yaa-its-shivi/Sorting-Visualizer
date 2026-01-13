# 🎯 Sorting Algorithm Visualizer

Sorting algorithms are usually taught with static diagrams…  
but algorithms are **motion**, not just logic.  
This project transforms DSA into animation — so you can *see* how data moves.

---

## 🚀 Features

- 🧩 Supports multiple algorithms:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
- 🎬 Step-by-step animations
- ⏱ 1 second interval replay
- 📊 Chart-based visualization
- 🎨 Built with React + Tailwind + Recharts
- 🧠 Perfect for students learning DSA

---

## 🧩 Algorithms Implemented

| Algorithm | Best | Average | Worst | Space | Stable |
|---|---|---|---|---|---|
| Bubble | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion | O(n) | O(n²) | O(n²) | O(1) | Yes |

---

## 🎮 Algorithm Personalities

> A fun way to remember sorting algorithms 😄

🟣 Bubble Sort — The Friendly Beginner
→ Swaps neighbors until sorted.

🟢 Selection Sort — The Minimalist
→ Always picks the smallest at each step.

🟡 Insertion Sort — The Organized One
→ Builds a sorted section as it moves.

🔵 Merge Sort — The Divider (coming soon)
🔴 Quick Sort — The General (coming soon)

Every algorithm generates a list of **snapshots** like:

```json
{
  "array": [5, 3, 1, 2],
  "i": 1,
  "j": 2,
  "swapped": true
}

setInterval(() => {
  setCurrentStep(stepIndex++);
}, 1000);
