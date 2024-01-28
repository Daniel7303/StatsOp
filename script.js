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

    
    static calculateVariance(numbers) {
      const meanValue = DescriptiveStatistics.calculateMean(numbers);
      const squaredDifferences = numbers.map((num) => (num - meanValue) ** 2);
      return DescriptiveStatistics.calculateMean(squaredDifferences);
    }
  
    static calculateStandardDeviation(numbers) {
      return Math.sqrt(DescriptiveStatistics.calculateVariance(numbers));
    }
  }
  
  const dataset = [12, 15, 8, 10, 5, 14, 7, 9];
  console.log("Mean:", DescriptiveStatistics.calculateMean(dataset));
  console.log("Median:", DescriptiveStatistics.calculateMedian(dataset));
  console.log("Range:", DescriptiveStatistics.calculateRange(dataset));
  console.log("Standard Deviation:", DescriptiveStatistics.calculateStandardDeviation(dataset));