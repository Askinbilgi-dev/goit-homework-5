(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-modal]"),
  };

  function toggleModal() {
    refs.backdrop.classList.toggle("is-open");
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.backdrop.addEventListener("click", (event) => {
    if (event.target === refs.backdrop) {
      toggleModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && refs.backdrop.classList.contains("is-open")) {
      toggleModal();
    }
  });
})();
