class Exam {
  #answer;
  #weight;
  #exams;

  constructor(answer, weight) {
    this.#answer = answer;
    this.#weight = weight;
    this.#exams = [];
  }

  add(exam) {
    this.#exams.push(exam);
  }

  #calculateScores() {
    return this.#exams.map((studentAnswers) => {
      let score = 0;
      for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === this.#answer[i]) {
          score += this.#weight[i];
        }
      }
      return score;
    });
  }

  avg() {
    const scores = this.#calculateScores();
    if (scores.length === 0) return 0;
    
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    return sum / scores.length;
  }

  min(count = 1) {
    const scores = this.#calculateScores();
    return scores.sort((a, b) => a - b).slice(0, count);
  }

  max(count = 1) {
    const scores = this.#calculateScores();
    return scores.sort((a, b) => b - a).slice(0, count);
  }

  lt(limit) {
    const scores = this.#calculateScores();
    return scores.filter((score) => score < limit);
  }

  gt(limit) {
    const scores = this.#calculateScores();
    return scores.filter((score) => score > limit);
  }
}

export default Exam;