<section class="card">
  {#if $$slots.header}
    <header class="card-header">
      <slot name="header" />
    </header>
  {/if}

  <main class="card-body">
    <slot />
  </main>

  {#if $$slots.footer}
    <footer class="card-footer">
      <slot name="footer" />
    </footer>
  {/if}
</section>

<style>
  .card {
    background-color: var(--color-bg-white);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  }

  .card .card-header {
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--color-bg-light);
    font-size: var(--font-30);
    font-weight: bold;
    color: var(--color-text-primary);
  }

  .card .card-body {
    padding: 1rem 2rem;
  }

  .card .card-footer {
    padding: 1rem 2rem;
  }
</style>
