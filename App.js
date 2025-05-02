let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Ankit Sir")
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon ankit sir")
    } else {
        console.log("Good Evening Ankit sir")
    }
}
// window.addEventListener('load', () => {
//     wishMe()
// })

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello") || message.includes("hey")) {
        speak("hello sir, what can i help you?")
    } else if (message.includes("who are you")) {
        speak("i'm a artificial inteligence ,created by ankit sir")
    }else if (message.includes("when is my birthday")) {
        speak("your birthday on 30th of march ")
    }else if (message.includes("what is my date of birth")) {
        speak("your date of birth is 30/03/2004")
    }else if (message.includes("who is your boss")) {
        speak("My boss is ,Mr. ankit sir ,he is lovely and greatefull for me ,and he is AI devloper")
    }else if (message.includes("what is your hobbies") ||message.includes("what is your hobby")) {
        speak("For example, I am someone who is a natural caregiver. I love helping people and making them feel special and happy. That makes me a wonderful family artificial inteligence")
    } else if (message.includes("du u love mi") ||message.includes("do you love me shipra")) {
        speak("i can't feel romantic love but i think you are wonderful")
    }else if (message.includes("what is my mobile number")) {
        speak("your mobile number is"+ '6,3,8,8,5,1,9,4,2,1')
    }else if (message.includes("what is my email id")) {
        speak("your Email ID is"+ 'a,n,k,1,3,7,2,0,0,3,@gmail.com')
    }else if (message.includes("open youtube")) {
        speak("opening you tube.....")
        window.open("https://www.youtube.com")
    } else if (message.includes("open google")) {
        speak("opening google....")
        window.open("https://www.google.com")
    } else if (message.includes("open instagram")) {
        speak("opening instagram....")
        window.open("https://www.instagram.com")
    } else if (message.includes("open facebook")) {
        speak("opening facebook....")
        window.open("https://www.facebook.com")
    } else if (message.includes("open linkedin")) {
        speak("opening linkedin....")
        window.open("https://www.linkedin.com")
    } else if (message.includes("open twitter")) {
        speak("opening twitter....")
        window.open("https://twitter.com")
    }else if (message.includes("open calculator")) {
        speak("opening calculator....")
        window.open("calculator://")
    }else if (message.includes("open whatsapp")) {
        speak("opening whatsapp....")
        window.open("whatsapp://")
    }else if (message.includes("time")) {
       let time=new Date().toLocalString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }else if (message.includes("date")) {
        let date=new Date().toLocalString(undefined,{day:"numeric",month:"short"})
        speak(date)
     }else if (message.includes("thank you")) {
        speak("your most welcome...")
    } 
    else {
        let finalText="this is what i found on internet according" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q==${message.replace("shipra","")}`,"_blank")
    }
}
