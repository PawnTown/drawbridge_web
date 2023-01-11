<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Crafted in <b>Munich</b> by <a target="_blank" rel="noreferrer" href="https://khad.im">Khadim</a></p>
	</footer>
</div>

<style scoped>
	footer {
		font-size: 14px;
		color: gray;
		text-align: center;
	}

	b {
		color: #f95d7f;
		font-weight: normal;
	}

	a {
		color: #f95d7f;
		font-weight: bold;
		text-decoration: none;
	}
</style>
