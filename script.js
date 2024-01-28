class DescriptiveStatistics {
    static calculateMean(numbers) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum / numbers.length;
    }
  
    static calculateMedian(numbers) {
      const sortedNumbers = numbers.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedNumbers.length / 2);
      return sortedNumbers.length % 2 === 0
        ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2
        : sortedNumbers[middle];
    }

     // trying toImplement mode calculation
    static calculateMode(numbers) {
    }
  
    static calculateRange(numbers) {
      const sortedNumbers = numbers.slice().sort((a, b) => a - b);
      return sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];
    }
  
  