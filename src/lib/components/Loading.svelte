<section>
  <div class="spinner">
    <svg height="100" width="100">
      <circle
        cx="30"
        cy="30"
        r="25"
        stroke="white"
        stroke-dasharray="155"
        stroke-dashoffset="155"
        stroke-width="6"
        fill-opacity="0"
      />
    </svg>
  </div>
  <h2>
    {#if $$slots.title}
      <slot name="title" />
    {:else}
      Memuat...
    {/if}
  </h2>
</section>

<style>
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes stroke {
    0% {
      stroke-dashoffset: 155;
    }
    50% {
      stroke-dashoffset: 0;
    }
    50.1% {
      stroke-dashoffset: 310;
    }
    100% {
      stroke-dashoffset: 155;
    }
  }

  section {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--color-text-white);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    text-align: center;
  }

  .spinner {
    width: 6rem;
    height: 6rem;
  }

  .spinner {
    animation: rotate 3s linear infinite;
  }
  .spinner svg circle {
    animation: stroke 2s linear infinite;
  }
</style>
