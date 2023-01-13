<script>
</script>

<header>
	<div class="logo">
		<a href="/">
			DrawBridge
		</a>
	</div>

	<nav>
		<ul>
			<!-- <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li> -->
			<li>
				<a class="github-img" target="_blank" rel="noreferrer" href="https://github.com/sveltejs/kit">
					&nbsp;
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		max-width: 1148px;
		width: 100%;
		margin: 24px auto;
		padding: 0 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}

	.logo a{
		color: white;
		text-decoration: none;
		font-size: 18px;
		font-weight: bold;
	}

	nav ul {
		display: flex;
		list-style: none;
	}

	nav ul li {
		margin: 0 12px;
	}

	.github-img {
		display: block;
		filter: invert(1) sepia(0) saturate(0) hue-rotate(0deg) brightness(1) contrast(1);
		width: 24px;
		height: 24px;
		background-image: url("img/github.svg");
		background-size: contain;
		background-repeat: no-repeat;
		text-decoration: none;
	}
</style>
