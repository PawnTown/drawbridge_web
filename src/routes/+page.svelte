<script>
	// @ts-nocheck
    import { onMount } from "svelte";

	let dlinks = {
		"Windows": "https://github.com/PawnTown/drawbridge/releases/download/app-v0.0.2/drawbridge_0.0.2_x64_en-US.msi",
		"MacOS": "https://github.com/PawnTown/drawbridge/releases/download/app-v0.0.2/drawbridge_0.0.2_x64.dmg",
		"Linux": "https://github.com/PawnTown/drawbridge/releases/download/app-v0.0.2/drawbridge.app.tar.gz",
	};

	let os = "";
	onMount(() => {
		if (window.navigator.userAgent.indexOf("Win")!=-1) os="Windows";
		if (window.navigator.userAgent.indexOf("Mac")!=-1) os="MacOS";
		if (window.navigator.userAgent.indexOf("Linux")!=-1) os="Linux";

		fetch("https://pawntown.github.io/drawbridge_web/downloads.json")
		.then(response => response.json())
		.then(data => {
			dlinks.MacOS = data["darwin-x86_64"];
			dlinks.Linux = data["linux-x86_64"];
			dlinks.Windows = data["windows-x86_64"];
		});
	});
</script>

<svelte:head>
	<title>DrawBridge</title>
	<meta name="description" content="DrawBridge, a bridge between your chess software and your remote engine" />
</svelte:head>

<section>
	<div class="logo">
		<img src="img/logo-min.png" alt="DrawBridge Logo" />
	</div>
	<h1>Engine Cluster<br>DrawBridge</h1>
	<p>
		DrawBridge is a open source and free to use bridge between your chess software and your remote engine cluster.
		<br>
		Available for Windows, Linux and macOS.
	</p>
	<div class="button-wrap">
		<a class="button" href={dlinks[os ?? "Windows"] ?? ""} target="_blank" rel="noreferrer">
			Download for { os ?? "Windows" }
		</a>
		<a class="link" target="_blank" rel="noreferrer" href="https://github.com/PawnTown/drawbridge/releases">See all available versions</a>
	</div>
</section>

<style scoped>
h1 {
  font-size: 114px;
  font-weight: bold;
  background: -webkit-linear-gradient(-74deg, #f95d7f 15%, #7180f5 50%, #a1fccc 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

p {
	text-align: center;
	color: gray;
	line-height: 2.4;
	font-size: 14px;
}

.button-wrap {
	margin: 64px 0 25vh 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}

.button {
	border: none;
	background: -webkit-linear-gradient(-44deg, #f95d7f 15%, #7180f5 84%);
	color: white;
	padding: 24px 84px;
	border-radius: 64px;
	font-size: 18px;
	cursor: pointer;
	outline: none;
	margin-bottom: 7px;
	text-decoration: none;
}

.link {
	color: #7180f5;
	font-size: 14px;
	text-decoration: none;
}

.link:hover {
	color: #949ff2;
}

.button:hover {
	filter: brightness(1.2);
}

.button:active {
	filter: brightness(0.8);
}

.logo {
	margin-top: 142px;
	text-align: center;
}

.logo img {
	width: 240px;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

@media screen and (max-width: 1000px) {
	h1 {
		font-size: 74px;
	}

	.logo img {
		width: 180px;
	}
}


@media screen and (max-width: 760px) {
	h1 {
		font-size: 44px;
	}
}
</style>
