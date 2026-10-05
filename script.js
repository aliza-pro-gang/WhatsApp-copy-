const chats=[
{name:"Alex",initial:"A",msg:"Hey! How are you?",time:"10:25 AM"},
{name:"Sam",initial:"S",msg:"See you tomorrow.",time:"9:10 AM"},
{name:"Gaming Group",initial:"G",msg:"New update is live!",time:"Yesterday"},
{name:"Ali",initial:"A",msg:"Okay bro 👍",time:"Yesterday"}
];
const list=document.getElementById("chatList");
function renderChats(items=chats){
  list.innerHTML=items.map((c,i)=>`<div class="chat-row" data-i="${i}">
    <div class="avatar">${c.initial}</div><div class="chat-info"><b>${c.name}</b><small>${c.msg}</small></div><span class="time">${c.time}</span>
  </div>`).join("");
  document.querySelectorAll(".chat-row").forEach(row=>row.onclick=()=>openChat(chats[row.dataset.i]));
}
renderChats();
document.querySelectorAll(".tab").forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
  document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active"); document.getElementById(btn.dataset.page).classList.add("active");
});
document.getElementById("chatSearch").oninput=e=>{
  const q=e.target.value.toLowerCase();
  renderChats(chats.filter(c=>(c.name+" "+c.msg).toLowerCase().includes(q)));
};
function openChat(c){
  document.getElementById("modalName").textContent=c.name;
  document.getElementById("modalAvatar").textContent=c.initial;
  document.getElementById("messages").innerHTML=`<div class="bubble">${c.msg}</div><div class="bubble mine">Hello! 👋</div>`;
  document.getElementById("chatModal").classList.remove("hidden");
}
document.getElementById("backBtn").onclick=()=>document.getElementById("chatModal").classList.add("hidden");
document.getElementById("sendForm").onsubmit=e=>{
  e.preventDefault(); const input=document.getElementById("messageInput"); const v=input.value.trim(); if(!v)return;
  const b=document.createElement("div"); b.className="bubble mine"; b.textContent=v;
  document.getElementById("messages").appendChild(b); input.value=""; b.scrollIntoView({behavior:"smooth"});
};
document.getElementById("themeBtn").onclick=()=>document.body.classList.toggle("dark");
document.getElementById("searchBtn").onclick=()=>{document.getElementById("chatSearch").focus()};
document.getElementById("menuBtn").onclick=()=>alert("Menu");
