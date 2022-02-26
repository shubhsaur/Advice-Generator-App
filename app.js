const ADVICE_API_URL = "https://api.adviceslip.com/advice";
const title = document.getElementById("title");
const advice = document.getElementById("advice");

document.querySelector(".container button").addEventListener("click", () => {
	fetchAdvice();
});

const fetchAdvice = async () => {
	const res = await fetch(ADVICE_API_URL);
	const data = await res.json();

	title.innerHTML = `ADVICE #${data.slip.id}`;
	advice.innerHTML = `"${data.slip.advice}"`;
};
