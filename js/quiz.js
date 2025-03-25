
export class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timer = 30;
        this.intervalId = null;
        this.onQuestionUpdate = null;
        this.onTimerUpdate = null;
        this.onScoreUpdate = null;
        this.onFeedback = null; 
        this.onGameEnd = null;
        this.currentQuestion = null;
    }

    start() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timer = 30;
        this.startTimer();
        this.showQuestion();
    }

    startTimer() {
        this.intervalId = setInterval(() => {
            this.timer--;
            if (this.onTimerUpdate) {
                this.onTimerUpdate(this.timer);
            }
            if (this.timer <= 0) {
                this.handleTimeout();
            }
        }, 1000);
    }

    handleTimeout() {
        clearInterval(this.intervalId);
        if (this.onFeedback) { 
            this.onFeedback("Tempo esgotado!", false);
        }
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
                this.timer = 30;
                this.startTimer();
                this.showQuestion();
            } else {
                this.endGame();
            }
        }, 3000);
    }

    showQuestion() {
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        if (this.onQuestionUpdate) {
            this.onQuestionUpdate(this.currentQuestion);
        }
    }

    checkAnswer(answer) {
        clearInterval(this.intervalId);
        const isCorrect = answer.correct;
        if (isCorrect) {
            this.score += 10;
            if (this.onScoreUpdate) {
                this.onScoreUpdate(this.score);
            }
            if (this.onFeedback) { 
                this.onFeedback("Resposta Correta! 🎉", true);
            }
        } else {
            if (this.onFeedback) { 
                this.onFeedback("Resposta Incorreta! ❌", false);
            }
        }

        this.showExplanation(isCorrect);

        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
                this.timer = 30;
                this.startTimer();
                this.showQuestion();
            } else {
                this.endGame();
            }
        }, 1000);
    }

    showExplanation(isCorrect) {
        if (this.currentQuestion && this.currentQuestion.explanation && this.onFeedback) {
            this.onFeedback(this.currentQuestion.explanation, isCorrect); 
        }
    }

    endGame() {
        clearInterval(this.intervalId);
        if (this.onGameEnd) {
            this.onGameEnd(this.score);
        }
    }
}