document.addEventListener('scroll', () => {
    
leadership = 95
const leadership_progress_bar = document.querySelector('.progress-bar.leadership');
leadership_progress_bar.style.width = `${leadership}%`;
const leadership_percentage_tip = document.querySelector('.percentage-tip.leadership');
leadership_percentage_tip.style.left =  `${leadership}%`;
leadership_percentage_tip.textContent = `${leadership}%`;

web = 85
const web_progress_bar = document.querySelector('.progress-bar.web');
web_progress_bar.style.width = `${web}%`;
const web_percentage_tip = document.querySelector('.percentage-tip.web');
web_percentage_tip.style.left = `${web}%`;
web_percentage_tip.textContent = `${web}%`;


api = 75
const api_progress_bar = document.querySelector('.progress-bar.api');
api_progress_bar.style.width = `${api}%`;
const api_percentage_tip = document.querySelector('.percentage-tip.api');
api_percentage_tip.style.left = `${api}%`;
api_percentage_tip.textContent = `${api}%`;

mentainance = 80
const web_mentainance_progress_bar = document.querySelector('.progress-bar.web-mentainance');
web_mentainance_progress_bar.style.width = `${mentainance}%`;
web_mentainance_percentage_tip = document.querySelector('.percentage-tip.web-mentainance');
web_mentainance_percentage_tip.style.left = `${mentainance}%`;
web_mentainance_percentage_tip.textContent = `${mentainance}%`;

database = 82
const database_progress_bar = document.querySelector('.progress-bar.database');
database_progress_bar.style.width = `${database}%`;
database_percentage_tip = document.querySelector('.percentage-tip.database');
database_percentage_tip.style.left = `${database}%`;
database_percentage_tip.textContent = `${database}%`;

machine_learning = 20
const machine_learning_progress_bar = document.querySelector('.progress-bar.machine-learning');
machine_learning_progress_bar.style.width = `${machine_learning}%`;
machine_learning_percentage_tip = document.querySelector('.percentage-tip.machine-learning');
machine_learning_percentage_tip.style.left = `${machine_learning}%`;
machine_learning_percentage_tip.textContent = `${machine_learning}%`;


});