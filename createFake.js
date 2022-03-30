let project = document.getElementsByClassName("project")[0];
let annoucement = document.getElementsByClassName("annoucement")[0];

let fakeProject = [
	{
		title: "Who is Normy?",
		text: `Normy is a 14 months border collie, his color is a combination of whiteand blond.
		He is quite a picky eater which made him weight around 17kg, would like him to gain a maybe 1-2 more kg.`,
	},
	{
		title: "Why Normy doesn't fetch?",
		text: "Because the ball will move if I look at it",
	},
	{
		title: "What is Normy favourite toy?",
		text: "Very Big ball, bigger the better",
	},
	{
		title: "Normy next appointment",
		text: "My appointment is next Wednesday",
	},
	{
		title: "Who walk Normy every day?",
		text: "My owner do! he walk me day and night never know tiredness",
	},
	{
		title: "Is Normy fat?",
		text: "No matter how much I eat I never gain much fat, so I think I am in the normal range",
	},
];

let fakeAnnoumcement = [
	{
		title: "Normy health",
		description: "He is doing very well!",
	},
	{
		title: "Where am I walking today?",
		description:
			"My owner tells me we are going to the river today, I am very excited:)",
	},
	{
		title: "Site maintenance",
		description: "Site service is going down from 11pm-4am, you don't need this site when Normy is asleep anyway"
	}
];


let createProjects = (list) => {
	let projects = document.getElementsByClassName("grouping")[0];

	for (let i = 0; i < list.length; i++) {
		let parent = document.createElement("div");
		parent.className = "project";

		let sideColor = document.createElement("div");
		sideColor.className = "sideColor";
		parent.appendChild(sideColor);

		let content = document.createElement("div");
		content.className = "content";

		let title = document.createElement("div");
		title.className = "title";
		title.innerText = list[i].title;
		content.appendChild(title);

		let text = document.createElement("div");
		text.className = "textContainer";
		text.innerText = list[i].text;
		content.appendChild(text);

		parent.appendChild(content);

		projects.appendChild(parent);
	}
};

createProjects(fakeProject);

let createFakeSuggestion = (list) =>{
	let getAnnoun = document.getElementsByClassName("suggestion")[0];

	for(let i = 0; i < list.length; i++){
		let parent = document.createElement("div");
		parent.className = "suggest"

		let title = document.createElement("div");
		title.className = "title"
		title.innerText = list[i].title;
		parent.appendChild(title);

		let description = document.createElement("div");
		description.className = "text";
		description.innerText = list[i].description;
		parent.appendChild(description);
		
		getAnnoun.appendChild(parent);

		let lineBreak = document.createElement("div");
		lineBreak.className = "lineBreak";
		getAnnoun.appendChild(lineBreak);
	}
}

createFakeSuggestion(fakeAnnoumcement);
