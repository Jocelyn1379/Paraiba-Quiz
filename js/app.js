import { Quiz } from './quiz.js';
import { questions } from './questions.js';

const startBtn = document.getElementById('start-btn');
const quizContent = document.getElementById('quiz-content');
const restartScreen = document.getElementById('restart-screen');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timeElement = document.getElementById('time');
const scoreElement = document.getElementById('current-score');
const feedbackElement = document.getElementById('feedback');
const finalScoreElement = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');
const mainMenuBtn = document.getElementById('main-menu-btn'); 
const finalMessageElement = document.getElementById('final-message');
const startScreenElement = document.getElementById('start-screen'); 

class GameUI {
    constructor() {
        this.quiz = new Quiz(questions);
        this.quiz.onQuestionUpdate = this.updateQuestionUI.bind(this); 
        this.quiz.onTimerUpdate = this.updateTimerUI.bind(this);     
        this.quiz.onScoreUpdate = this.updateScoreUI.bind(this);     
        this.quiz.onFeedback = this.showFeedbackUI.bind(this);    
        this.quiz.onGameEnd = this.handleGameEnd.bind(this);   
        this.setupEventListeners();
    }

    setupEventListeners() {
        startBtn.addEventListener('click', () => this.startGame());
        restartBtn.addEventListener('click', () => this.restartGame());
        if (mainMenuBtn) { // Verifica se o botão existe no DOM
            mainMenuBtn.addEventListener('click', () => this.showMainMenu());
        }
        optionsElement.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const answerText = event.target.textContent;
                const currentQuestion = this.quiz.currentQuestion;
                if (currentQuestion) {
                    const selectedAnswer = currentQuestion.answers.find(answer => answer.text === answerText);
                    if (selectedAnswer) {
                        this.handleAnswer(selectedAnswer);
                    }
                }
            }
        });
    }

    startGame() {
        startScreenElement.classList.add('hidden'); 
        quizContent.classList.remove('hidden');
        this.quiz.start();
        this.updateQuestionUI(this.quiz.currentQuestion); 
        this.updateTimerUI(this.quiz.timer);             
        this.updateScoreUI(this.quiz.score);             
    }

    updateQuestionUI(question) {
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';

        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerHTML = answer.text;
            optionsElement.appendChild(button);
        });
    }

    updateTimerUI(time) {
        timeElement.textContent = time;
    }

    updateScoreUI(score) {
        scoreElement.textContent = score;
    }

    showFeedbackUI(message, isCorrect) {
        feedbackElement.textContent = message;
        feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackElement.classList.remove('hidden');
        setTimeout(() => {
            feedbackElement.classList.add('hidden');
        }, 1500); 
    }

    handleGameEnd(score) {
        quizContent.classList.add('hidden');
        restartScreen.classList.remove('hidden');
        startScreenElement.classList.add('hidden'); 
        finalScoreElement.textContent = score;
        this.updateFinalMessageUI(score); 
    }

    updateFinalMessageUI(score) {
        if (finalMessageElement) {
            const percentage = (score / (questions.length * 10)) * 100;
            if (percentage >= 80) {
                finalMessageElement.textContent = "Parabéns! Você é um verdadeiro especialista em Paraíba!";
            } else if (percentage >= 60) {
                finalMessageElement.textContent = "Muito bom! Você tem um bom domínio sobre a história e cultura paraibana.";
            } else if (percentage >= 40) {
                finalMessageElement.textContent = "Um bom esforço! Continue explorando e aprendendo mais sobre a Paraíba.";
            } else {
                finalMessageElement.textContent = "Não desanime! Cada tentativa é uma oportunidade de aprender mais sobre a Paraíba. Tente novamente!";
            }
        }
    }

    showMainMenu() {
        restartScreen.classList.add('hidden');
        startScreenElement.classList.remove('hidden'); 
        this.resetQuizState();
    }

    resetQuizState() {
        this.quiz = new Quiz(questions); 
        scoreElement.textContent = '0';
        feedbackElement.classList.add('hidden');
        timeElement.textContent = '30';
    }

    handleAnswer(answer) {
        this.quiz.checkAnswer(answer);
    }

    restartGame() {
        restartScreen.classList.add('hidden');
        this.quiz = new Quiz(questions);
        this.startGame();
    }
}
const gameUI = new GameUI();