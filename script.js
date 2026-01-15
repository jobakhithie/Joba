function generate() {
  const type = document.getElementById("type").value;
  const platform = document.getElementById("platform").value;
  const topic = document.getElementById("topic").value || "success";

  let prompt = "";

  if (type === "image") {
    prompt = `Create a high-quality, cinematic image about ${topic}. 
Style: realistic, dramatic lighting, emotional impact.
Perfect for ${platform}.`;
  } else {
    prompt = `Create a short viral video about ${topic}.
Length: 7–10 seconds.
Style: cinematic, fast cuts, emotional hook in first 2 seconds.
Perfect for ${platform}.`;
  }

  document.getElementById("result").value = prompt;
}

function copyText() {
  const text = document.getElementById("result");
  text.select();
  document.execCommand("copy");
  alert("Prompt copied!");
}
