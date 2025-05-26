function openModal(imageUrl) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const downloadLink = document.getElementById("downloadLink");

  modal.style.display = "flex"; // Display the modal
  modalImage.src = imageUrl; // Set the modal image source
  downloadLink.href = imageUrl; // Set the download link to the image URL
}

// Function to close the modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
const inputField = document.getElementById("inputField");
const messages = document.getElementById("messages");
const sendButton = document.getElementById("sendButton");

// Escape HTML characters to prevent HTML code execution
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function (char) {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });
}

// Function to parse Markdown-like formatting
// Function to parse Markdown-like formatting
function parseMarkdown(text) {
  // Escape HTML characters to prevent execution of HTML code
  text = escapeHTML(text);

  // Headers: Supports # through ######
  text = text.replace(/^######\s+(.*)$/gm, "<h6>$1</h6>");
  text = text.replace(/^#####\s+(.*)$/gm, "<h5>$1</h5>");
  text = text.replace(/^####\s+(.*)$/gm, "<h4>$1</h4>");
  text = text.replace(/^###\s+(.*)$/gm, "<h3>$1</h3>");
  text = text.replace(/^##\s+(.*)$/gm, "<h2>$1</h2>");
  text = text.replace(/^#\s+(.*)$/gm, "<h1>$1</h1>");

  // Horizontal rule (---)
  text = text.replace(/---/g, '<div class="separator"></div>');

  // Bold and Italics
  text = text.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>"); // Bold and Italic
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Bold
  text = text.replace(/_(.*?)_/g, "<em>$1</em>"); // Italic

  // Inline code `code`
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Code block with ```
  text = text.replace(/```([\s\S]+?)```/g, "<pre><code>$1</code></pre>");

  // Links [text](URL)
  text = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank">$1</a>'
  );

  // Unordered list ( - or *)
  text = text.replace(/(?:^|\n)[*-]\s?(.*)/g, function (match, p1) {
    return `<ul><li>${p1}</li></ul>`;
  });
  text = text.replace(/<\/ul>\s*<ul>/g, ""); // Combine adjacent <ul> tags

  // Ordered list (1.)
  text = text.replace(/(?:^|\n)(\d+)\.\s?(.*)/g, function (match, p1, p2) {
    return `<ol><li>${p2}</li></ol>`;
  });
  text = text.replace(/<\/ol>\s*<ol>/g, ""); // Combine adjacent <ol> tags

  // Line breaks
  text = text.replace(/\n/g, "<br>");

  // Render inline math expressions \( ... \) and display math expressions \[ ... \]
  text = text.replace(/\\\((.+?)\\\)/g, (_, expr) => {
    try {
      const cleanedExpr = expr
        .replace(/[VN]/g, "") // Remove V and N
        .replace(/<br\s*\/?>/gi, "") // Remove <br> as plain text
        .trim();
      console.log("Rendering inline math:", cleanedExpr);
      return katex.renderToString(cleanedExpr, {
        throwOnError: false,
        displayMode: false,
        output: "html", // Ensure HTML output for clean rendering
        fleqn: false, // Disable flush-left equations to center inline math
        minRuleThickness: 0.04, // Adjust for minimal thickness, reducing space
      });
    } catch (error) {
      console.error("Error rendering inline math:", expr, error);
      return `<span class="error">Error rendering math: ${escapeHTML(
        expr
      )}</span>`;
    }
  });

  text = text.replace(/\\\[(.+?)\\\]/g, (_, expr) => {
    try {
      const cleanedExpr = expr
        .replace(/[VN]/g, "") // Remove V and N
        .replace(/<br\s*\/?>/gi, "") // Remove <br> as plain text
        .trim();
      console.log("Rendering display math:", cleanedExpr);
      return `<div style="text-align:center; margin: 0.2em 0; padding: 0;">${katex.renderToString(
        cleanedExpr,
        {
          throwOnError: false,
          displayMode: true,
          output: "html", // Ensure HTML output for clean rendering
          fleqn: false, // Disable flush-left equations to center display math
          minRuleThickness: 0.04, // Adjust for minimal thickness, reducing space
        }
      )}</div>`;
    } catch (error) {
      console.error("Error rendering display math:", expr, error);
      return `<div class="error">Error rendering math: ${escapeHTML(
        expr
      )}</div>`;
    }
  });

  return text;
}

// Handle the user message
function handleUserMessage() {
  const userMessage = inputField.value;
  if (userMessage.trim() === "") return; // Don't send empty messages
  displayMessage(userMessage, "user");
  inputField.value = "";
  fetchAssistantResponse(userMessage);
  document.getElementById("helpText").style.display = "none";
}

// Function to display user or assistant message
function displayMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className =
    sender === "user" ? "user-message" : "assistant-message";
  messageDiv.innerHTML = parseMarkdown(text); // Use parseMarkdown to allow formatting
  messages.appendChild(messageDiv);
  messages.scrollTop = messages.scrollHeight; // Scroll to bottom
}

// Fetch assistant's response (dummy response for now)
// Fetch assistant's response with "please wait" message for image generation
async function fetchAssistantResponse(userMessage) {
  const typingDiv = document.createElement("div");
  typingDiv.className = "assistant-message";
  typingDiv.innerHTML = '<span class="typing">Sabar dulu coek</span>';
  messages.appendChild(typingDiv);
  messages.scrollTop = messages.scrollHeight;

  // Check if the message starts with "/imagine"
  if (userMessage.startsWith("/image")) {
    // Extract the prompt after the /imagine command
    const prompt = userMessage.replace("/image", "").trim();
    if (prompt) {
      try {
        // Update to show the "please wait" message
        typingDiv.innerHTML =
          '<span class="typing">Tolong sabar dulu woy </span>';

        // Generate image URL
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
          prompt
        )}/?nologo=1`;

        // Create an image element and set an onload event to control the "please wait" message
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = prompt;
        image.style = "width: 80%; border-radius: 10px; margin-top: 15px;";

        image.onclick = function () {
          openModal(imageUrl); // Open the modal on image click
        };

        // Event fires only once the image is fully loaded
        image.onload = function () {
          // Clear the "please wait" message after the image loads
          typingDiv.innerHTML = "";
          messages.appendChild(image);
          messages.scrollTop = messages.scrollHeight; // Scroll to bottom
        };

        // Append the loading message to the messages container
        messages.appendChild(image);
        messages.scrollTop = messages.scrollHeight; // Ensure chat scrolls down to new messages
      } catch (error) {
        typingDiv.innerHTML =
          "<span class='typing'>Error: Tidak dapat terhubung ke server /image</span>";
      }
    } else {
      typingDiv.innerHTML =
        "<span class='typing'>Tolong kasi kata katanya setelah /image.</span>";
    }
  } else {
    // Handle regular text responses
    const apiUrl = "https://text.pollinations.ai/openai";
    const requestBody = {
      model: "openai-gpt-3",
      messages: [{ role: "user", content: userMessage }],
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage = data.choices[0].message.content;

        // Parse and display the assistant's response
        const formattedMessage = parseMarkdown(assistantMessage);
        typingDiv.innerHTML = ""; // Clear the typing indicator
        const messageDiv = document.createElement("div");
        messageDiv.className = "assistant-message";
        messageDiv.innerHTML = formattedMessage;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight; // Scroll to bottom
      } else {
        typingDiv.innerHTML =
          "<span class='typing'>Maaf, Permintaan gak bisa diproses</span>";
      }
    } catch (error) {
      typingDiv.innerHTML =
        "<span class='typing'>Error: Tidak dapat terhubung ke server.</span>";
    }
  }
}

// Typing effect of help
const text = "Apa yang bisa aku bantu?";
const speed = 50; // typing speed in milliseconds
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("helpText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

// Show info popup using SweetAlert2
function showInfo() {
  Swal.fire({
    title: "Selamat datang di SaanGPT",
    html: `
      <p style="color: #bbb; font-size: 1rem; line-height: 1.5;">
        SaanGPT adalah asisten yang dapat membantumu, Bagaimana cara memulainya:
      </p><br>
      <ul style="color: #bbb; font-size: 0.9rem; line-height: 1.4; padding-left: 10px;text-align: justify">
        <li><strong>/image </strong>: Membuat foto sesuai keinginanmu</li><br>
        <li><strong>Catatan</strong>: untuk /image gunakan kata-kata dalam bentuk bahasa ingris</li><br>
        <li><strong>Contoh</strong>: /image cat in the galaxi with snake</li><br>
      </ul>
      <p style="color: #bbb; font-size: 1rem; line-height: 1.5;">
        <a target="_blank" href="https://ihsanbaihaqii.github.io/" style="text-decoration: none; color: aqua;">
        <span style="color: white;">My Portofolio</span>
        <br> https://ihsanbaihaqii.github.io/</a>
      </p>
    `,
    icon: "info",
    confirmButtonText: "Got it!",
    background: "#212121",
    color: "#d1d5db",
    confirmButtonColor: "#333",
  }).then(() => {
    // Start the typewriter effect after the user closes the info alert
    typeWriter();
  });
}
// Start typing effect when page loads
window.onload = showInfo;

function confirmDeletion() {
  Swal.fire({
    title: "Kau yakin?",
    text: "Kau gak bisa mengembalikan pesan ini lagi!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Iya, Hapus aja!",
    cancelButtonText: "Jangan, Nggak jadilah!",
    reverseButtons: true,
    background: "#212121", // Background color
    color: "#d1d5db", // Text color
    confirmButtonColor: "#333", // Confirm button color
    cancelButtonColor: "#d1d5db", // Cancel button color
  }).then((result) => {
    if (result.isConfirmed) {
      // If 'Yes' is clicked, reload the page
      location.reload();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // If 'No' is clicked, show a custom styled cancel message
      Swal.fire({
        title: "Dibatalkan",
        text: "Pesan kamu masih tersimpan",
        icon: "error",
        background: "#212121", // Background color
        color: "#d1d5db", // Text color
        confirmButtonColor: "#333", // Confirm button color
      });
    }
  });
}
