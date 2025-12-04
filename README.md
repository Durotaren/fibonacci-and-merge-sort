# JavaScript Algorithms: Fibonacci & Merge Sort

This project contains three algorithm implementations written in JavaScript:

- Iterative Fibonacci (returns an array of Fibonacci numbers)
- Recursive Fibonacci using an accumulator array
- Merge Sort implemented with divide-and-conquer

The project focuses on practicing recursion, iteration, and array operations in JavaScript.

---

## 📘 Included Algorithms

### Iterative Fibonacci

Generates the Fibonacci sequence using a loop.  
It starts with `[0, 1]` and builds the sequence forward until it reaches the desired length.  
This approach is efficient, easy to read, and runs in linear time.

### Recursive Fibonacci

Generates the Fibonacci sequence using recursion and an accumulator array.  
Each recursive call extends the sequence by adding the last two numbers until the array reaches the target length.  
This version demonstrates how recursion can be used to build up results without redundant computations.

### Merge Sort

Implements the merge sort algorithm using the classic divide-and-conquer method.  
The function splits the array into halves recursively, sorts each half, and then merges them back together into a new sorted array.  
Merge sort guarantees O(n log n) performance and is stable.
