<script>
const form = document.getElementById("guessForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Validate form first
  if (!form.checkValidity()) {
    form.reportValidity(); // Shows browser validation messages
    return;
  }

  const data = new FormData(form);
  const params = new URLSearchParams(data);

  try {
    const response = await fetch("GOOGLE_SCRIPT_URL", {
      method: "POST",
      body: params
    });

    if (response.ok) {
      document.getElementById("ack").innerText =
        "Thank you! Your guess has been recorded.";
      form.reset();
    } else {
      document.getElementById("ack").innerText =
        "Submission failed. Please try again.";
    }

  } catch (err) {
    document.getElementById("ack").innerText =
      "Oops! Something went wrong.";
  }
});
</script>
