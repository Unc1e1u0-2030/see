
function generate() {
  const uuid = document.getElementById("uuid").value.trim();
  const host = document.getElementById("host").value.trim();
  const path = document.getElementById("path").value.trim();
  const tag = document.getElementById("tag").value.trim();
  const count = document.getElementById("count").value.trim();
  const ipsrc = document.getElementById("ipsrc").value.trim();
  const key = document.getElementById("key").value.trim();

  if (!uuid || !host) {
    alert("UUID 和 Host 为必填项！");
    return;
  }

  let url = "https://你的worker域名.workers.dev/?proto=vless";
  url += "&uuid=" + encodeURIComponent(uuid);
  url += "&host=" + encodeURIComponent(host);
  url += "&path=" + encodeURIComponent(path);
  url += "&tag=" + encodeURIComponent(tag);
  url += "&count=" + encodeURIComponent(count);

  if (ipsrc) url += "&ipsrc=" + encodeURIComponent(ipsrc);
  if (key) url += "&key=" + encodeURIComponent(key);

  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById("output").value = data;
    })
    .catch(err => {
      document.getElementById("output").value = "发生错误: " + err;
    });
}
