<script>
    import { onMount } from "svelte";

	let os = "";
	onMount(() => {
		if (window.navigator.userAgent.indexOf("Win")!=-1) os="Windows";
		if (window.navigator.userAgent.indexOf("Mac")!=-1) os="MacOS";
		if (window.navigator.userAgent.indexOf("Linux")!=-1) os="Linux";
	});
</script>

<svelte:head>
	<title>DrawBridge</title>
	<meta name="description" content="DrawBridge, a bridge between your chess software and your remote engine" />
</svelte:head>

<section>
	<h1>Engine Cluster<br>DrawBridge</h1>
	<p>
		DrawBridge is a open source and free to use bridge between your chess software and your remote engine cluster.
		<br>
		Available for Windows, Linux and macOS.
	</p>
	<div class="button-wrap">
		<button>
			Download for { os ?? "Windows" }
		</button>
		<a target="_blank" rel="noreferrer" href="https://github.com/PawnTown/drawbridge/releases">See all available versions</a>
	</div>
	<div class="screenshot">
		<img src="img/screenshot.png" alt="Screenshot of DrawBridge" />
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
	margin-top: 64px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}

button {
	border: none;
	background: -webkit-linear-gradient(-44deg, #f95d7f 15%, #7180f5 84%);
	color: white;
	padding: 24px 84px;
	border-radius: 64px;
	font-size: 18px;
	cursor: pointer;
	outline: none;
	margin-bottom: 7px;
}

a {
	color: #7180f5;
	font-size: 14px;
	text-decoration: none;
}

a:hover {
	color: #949ff2;
}

button:hover {
	filter: brightness(1.2);
}

button:active {
	filter: brightness(0.8);
}

.screenshot {
	padding: 24px;
	height: 640px;
	display: flex;
	margin: 84px auto 0 auto;
	justify-content: center;
	background: -webkit-linear-gradient(-74deg, #f95d7f 15%, #7180f5 50%, #a1fccc 85%);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	border-radius: 32px;
	max-width: 1100px;
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

</style>
