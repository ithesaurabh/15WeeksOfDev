
var crsr = document.getElementById("cursor");
var crsrbg = document.getElementById("cursorbg");
document.addEventListener("mousemove", (dets)=>{
   crsr.style.left = dets.x +1+"px";
   crsr.style.top = dets.y+"px";
   crsrbg.style.left = dets.x - 350 +"px";
   crsrbg.style.top = dets.y -350+"px";
});

var crsrRToBeScaledFor = document.querySelectorAll(".crsrRToBeScaledFor");
crsrRToBeScaledFor.forEach(element => {
    element.addEventListener("mouseenter",()=>{
        crsr.style.backgroundColor = "yellow";
        crsr.style.borderRadius = "20px";
    })  
    element.addEventListener("mouseleave",()=>{
        crsr.style.backgroundColor = "#91f4ff";
        crsr.style.borderRadius = "0px";
        
    })  
});
var headings = document.querySelectorAll(".heading h2");
headings.forEach((heading) => {
    gsap.from(heading, {
        x: 80,
        duration: 0.5,
        scrollTrigger: {
            trigger: heading,
            scroller: "body",
            start: "top 70%",
            end: "top 10%",
            scrub: 1
        }
    });
});
gsap.from("#projectsMain", {
    scale:0.9,
    opacity:0,  
    duration : "0.5",
    stagger : 0.1,
    scrollTrigger : {
        trigger : "#projectsMain",
        scroller : "body",   
        start : "top 70%",
        end : "top 55%",    
        scrub : 2
    }
});

gsap.from("#momentsRow1", {
        scale:0.9,
        opacity:0,  
        duration : "0.5",
        stagger : 0.1,
        scrollTrigger : {
            trigger : "#momentsRow1",
            scroller : "body",   
            start : "top 70%",
            end : "top 55%",
            scrub : 2
        }
});

gsap.to("#startQuote",{
    y:50,
    x:50,
    duration:0.5,
    scrollTrigger : {
        trigger : "#startQuote",
        scroller : "body",   
        start : "top 60%",
        end : "top 55%",
        scrub : 2
    }
});
gsap.to("#quote-row-2",{
    scale:1.06,
    duration:0.5,
    scrollTrigger : {
        trigger : "#startQuote",
        scroller : "body",   
        start : "top 60%",
        end : "top 55%",
        scrub : 2
    }
});
gsap.to("#endQuote",{
    y:-50,
    x:-50,
    duration:0.5,
    scrollTrigger : {
        trigger : "#startQuote",
        scroller : "body",   
        start : "top 60%",
        end : "top 55%",
        scrub : 2
    }
});

//Click Listeners
function alertt(){
    alert("You are being alerted");
}
function gotoLinkedIn(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function gotoGitHub(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function gotoInstagram(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function gotoX(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function gotoLeetCode(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function gotoHack4Bengal(){
    window.location.href = "https://www.hack4bengal.tech/";
}
function gotoMail(){
    const email = "reach.saurabhkumarjha@gmail.com";
    const subject = "";
    const body =""
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
function sendEmail() {
    const email = "reach.saurabhkumarjha@gmail.com";
    const subject = "Join Our Team as a Software Developer";
    const body = `Dear Saurabh Kumar,

I hope this message finds you well. My name is [Your Name], and I am a [Your Position] at [Company Name]. We are impressed by your skills and experience in software development and would like to discuss an exciting opportunity with you.

About Us
[Company Name] is an innovative IT company committed to delivering top-notch solutions to our clients. We value creativity, collaboration, and continuous learning.

The Role
We are looking for a talented Software Developer to:
- Design, develop, and maintain software applications.
- Collaborate with teams to define and implement new features.
- Ensure application performance and fix bugs.

Your Skills
- Proficiency in [relevant programming languages/technologies].
- Strong problem-solving and teamwork abilities.
- Experience with [specific tools/methodologies].

Next Steps
If interested, please reply with your resume and a brief cover letter. We look forward to discussing how you can contribute to our team.

Best regards,

[Your Full Name]
[Your Position]
[Company Name]
[Your Phone Number]
[Your Email Address]
[Company Website]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
function project1(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function project2(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function project3(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function blog1(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function blog2(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function downloadResume(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function moment1(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function moment2(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}




