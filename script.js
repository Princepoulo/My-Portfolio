// Social media links data
const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jabulane-prince" },
    { name: "GitHub", url: "https://github.com/jabulane" },
    { name: "Twitter", url: "https://twitter.com/jabulane" },
  ];
  
  // Function to display social links
  function displaySocialLinks() {
    const socialLinksContainer = document.getElementById('social-links');
    socialLinksContainer.innerHTML = ''; // Clear existing content
  
    socialLinks.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.textContent = link.name;
      anchor.style.margin = "0 10px";
      socialLinksContainer.appendChild(anchor);
    });
  }
  
  // Call function to load links on page load
  displaySocialLinks();
  