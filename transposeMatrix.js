function transposeMatrix(matrix) {
  // Determine the number of rows in the input matrix.
  const rows = matrix.length;

  // Determine the number of columns in the input matrix.
  const cols = matrix[0].length;

  // Initialize the resulting matrix, which will hold the transposed values.
  const res = [];

  // Loop through each column of the input matrix.
  // In the transposed matrix, each column becomes a row.
  for (let i = 0; i < cols; i++) {
    // Add a new row for the transposed matrix.
    res.push([]);

    // For each column in the input matrix, loop through its rows.
    for (let j = 0; j < rows; j++) {
      // Assign values from the input matrix to the transposed matrix.
      // Essentially, the row value becomes the column value and vice versa.
      res[i].push(matrix[j][i]);
    }
  }

  // Return the transposed matrix.
  return res;
}
