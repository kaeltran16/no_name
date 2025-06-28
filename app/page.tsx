"use client"

import { Cormorant_Garamond, Dancing_Script, Playfair_Display } from "next/font/google"
import { useEffect, useRef, useState } from "react"
import "./romantic-styles.css"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})


const blessingsData = [
  {
    icon: "🌹",
    title: "Eternal Devotion",
    description:
      "You get a soulmate, a best friend, a partner in crime, a confidant, a everything. You get a everything.",
  },
  {
    icon: "🎁",
    title: "Gift of Love",
    description:
      "Gift every holiday, every birthday, every special occasion with a gift that is as unique as you are. You get a gift that is as unique as you are.",
  },
  {
    icon: "📱",
    title: "Texts of Love",
    description:
      "Morning texts, night texts, texts in the middle of the day, texts in the middle of the night, texts in the middle of the week, texts in the middle of the month, texts in the middle of the year, texts in the middle of the decade, texts in the middle of the century, texts in the middle of the millennium, texts in the middle of the eternity. You get a text that is as unique as you are.",
  },
  {
    icon: "🎭",
    title: "Soulful Adventures",
    description:
      "Together we'll dance through life's grand theater, writing our own fairy tale where every chapter ends with us choosing each other again and again.",
  },
]

const promisesData = [
  {icon: "💔", title: "Nothing", description: "Absolute nothing :)"},
]

export default function RomanticConfession() {
  const [activeTab, setActiveTab] = useState("blessings")
  const [currentQuote, setCurrentQuote] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", message: "" })
  const starsRef = useRef<HTMLDivElement>(null)
  const heartsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    createStars()

    const heartInterval = setInterval(createHeart, 3000)
    const musicInterval = setInterval(createMusicNote, 8000)

    return () => {
      clearInterval(heartInterval)
      clearInterval(musicInterval)
    }
  }, [])

  const createStars = () => {
    if (!starsRef.current) return

    // Clear existing stars
    starsRef.current.innerHTML = ""

    // Create twinkling stars
    for (let i = 0; i < 80; i++) {
      const star = document.createElement("div")
      star.className = "star"
      star.style.left = Math.random() * 100 + "%"
      star.style.top = Math.random() * 100 + "%"
      star.style.animationDelay = Math.random() * 4 + "s"
      star.style.animationDuration = Math.random() * 2 + 3 + "s"
      starsRef.current.appendChild(star)
    }

    // Create shooting stars
    for (let i = 0; i < 4; i++) {
      const shootingStar = document.createElement("div")
      shootingStar.className = "shooting-star"
      shootingStar.style.top = Math.random() * 50 + "%"
      shootingStar.style.animationDelay = Math.random() * 8 + "s"
      shootingStar.style.animationDuration = Math.random() * 3 + 6 + "s"
      starsRef.current.appendChild(shootingStar)
    }
  }

  const createHeart = () => {
    if (!heartsRef.current) return

    const heart = document.createElement("div")
    heart.className = "heart"
    const hearts = ["💖", "💕", "💗", "💓", "💝", "💘", "💞", "💟"]
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)]
    heart.style.left = Math.random() * 100 + "%"
    heart.style.animationDuration = Math.random() * 4 + 8 + "s"
    heart.style.color = `hsl(${Math.random() * 60 + 300}, 70%, 70%)`
    heartsRef.current.appendChild(heart)

    setTimeout(() => {
      heart.remove()
    }, 12000)
  }

  const createMusicNote = () => {
    const note = document.createElement("div")
    note.className = "music-note"
    const notes = ["♪", "♫", "♬", "♩", "♭", "♮", "♯"]
    note.innerHTML = notes[Math.floor(Math.random() * notes.length)]
    note.style.left = Math.random() * 100 + "%"
    note.style.animationDelay = Math.random() * 2 + "s"
    note.style.animationDuration = Math.random() * 4 + 10 + "s"
    document.body.appendChild(note)

    setTimeout(() => {
      note.remove()
    }, 14000)
  }

  const createSparkles = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    for (let i = 0; i < 12; i++) {
      const sparkle = document.createElement("div")
      sparkle.innerHTML = "✨"
      sparkle.style.position = "fixed"
      sparkle.style.left = rect.left + Math.random() * rect.width + "px"
      sparkle.style.top = rect.top + Math.random() * rect.height + "px"
      sparkle.style.color = `hsl(${Math.random() * 60 + 45}, 100%, 80%)`
      sparkle.style.fontSize = Math.random() * 10 + 15 + "px"
      sparkle.style.pointerEvents = "none"
      sparkle.style.zIndex = "100"
      sparkle.style.animation = "sparkleExplode 1.5s ease-out forwards"
      document.body.appendChild(sparkle)

      setTimeout(() => {
        sparkle.remove()
      }, 1500)
    }
  }

  const createHeartBurst = () => {
    const quoteElement = document.querySelector(".love-quote")
    if (!quoteElement) return

    const rect = quoteElement.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div")
      heart.innerHTML = "💖"
      heart.style.position = "fixed"
      heart.style.left = centerX + "px"
      heart.style.top = centerY + "px"
      heart.style.pointerEvents = "none"
      heart.style.zIndex = "100"
      heart.style.fontSize = Math.random() * 15 + 20 + "px"

      const angle = (Math.PI * 2 * i) / 20
      const distance = Math.random() * 200 + 100
      const endX = Math.cos(angle) * distance
      const endY = Math.sin(angle) * distance

      heart.style.animation = "heartBurst 2s ease-out forwards"
      heart.style.setProperty("--endX", endX + "px")
      heart.style.setProperty("--endY", endY + "px")

      document.body.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 2000)
    }
  }

  const createMagicEffect = () => {
    // Create hearts
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        createHeart()
      }, i * 50)
    }

    // Create music notes
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createMusicNote()
      }, i * 100)
    }
  }

  const handleYes = () => {
    setModalContent({
      title: "My Soul Soars to Heaven! 💕",
      message: ``,
    })
    setShowModal(true)

    // Create celebration effects
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        createHeart()
      }, i * 50)
    }

    // Create confetti
    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        const sparkle = document.createElement("div")
        sparkle.innerHTML = ["✨", "🌟", "💫", "⭐"][Math.floor(Math.random() * 4)]
        sparkle.style.position = "fixed"
        sparkle.style.left = Math.random() * window.innerWidth + "px"
        sparkle.style.top = "-50px"
        sparkle.style.pointerEvents = "none"
        sparkle.style.zIndex = "99"
        sparkle.style.fontSize = Math.random() * 20 + 20 + "px"
        sparkle.style.animation = `confettiFall ${Math.random() * 3 + 3}s linear forwards`
        document.body.appendChild(sparkle)

        setTimeout(() => {
          sparkle.remove()
        }, 6000)
      }
    }, 500)
  }

  const handleNo = () => {
    setModalContent({
      title: "My Love Remains Eternal 💙",
      message: `Like the moon patiently waits for the sun, like the ocean embraces the shore with endless devotion, my love for you remains unchanging and eternal.

Take all the time your beautiful heart needs to dream, to wonder, to feel. I will be here, loving you from afar, sending you gentle wishes on shooting stars and whispering your name to the evening breeze.

My heart knows no urgency when it comes to true love, for what is meant to be will find its way home. Until that moment, know that you are cherished beyond measure...

Forever yours in patient devotion, through seasons of waiting and dreams of tomorrow... 🌙💫🕊️`,
    })
    setShowModal(true)
  }

  return (
    <div className={`${dancingScript.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable} romantic-app`}>
      <div className="aurora"></div>
      <div className="stars" ref={starsRef}></div>
      <div className="floating-hearts" ref={heartsRef}></div>

      <div className="container">
        <div className="header mb-4" onClick={createMagicEffect}>
          <h1 className="main-title">{"My Heart's Eternal Confession"}</h1>
          <p className="subtitle">
            {
              "In the symphony of my soul, your name is the sweetest melody that plays on repeat, turning every moment into a love song written just for you..."
            }
          </p>
        </div>

      

        <div className="content-section">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "blessings" ? "active" : ""}`}
              onClick={(e) => {
                setActiveTab("blessings")
                createSparkles(e.currentTarget as HTMLElement)
              }}
            >
              What you get
            </div>
            <div
              className={`tab ${activeTab === "promises" ? "active" : ""}`}
              onClick={(e) => {
                setActiveTab("promises")
                createSparkles(e.currentTarget as HTMLElement)
              }}
            >
              What you lost
            </div>
          </div>

          <div className={`tab-content ${activeTab === "blessings" ? "active" : ""}`}>
            <div className="compact-grid">
              {blessingsData.map((item, index) => (
                <div
                  key={index}
                  className="compact-item"
                  onClick={(e) => createSparkles(e.currentTarget as HTMLElement)}
                >
                  <span className="compact-icon">{item.icon}</span>
                  <div className="compact-title">{item.title}</div>
                  <div className="compact-description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`tab-content ${activeTab === "promises" ? "active" : ""}`}>
            <div className="compact-grid">
              {promisesData.map((item, index) => (
                <div
                  key={index}
                  className="compact-item"
                  onClick={(e) => createSparkles(e.currentTarget as HTMLElement)}
                >
                  <span className="compact-icon">{item.icon}</span>
                  <div className="compact-title">{item.title}</div>
                  <div className="compact-description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="decision-section">
          <h2 className="decision-title">Will You Dance With My Soul?</h2>
          <p className="decision-subtitle">
            {
              "My heart beats in anticipation, ready to love you with every star in the sky, every wave in the ocean, and every breath in my lungs..."
            }
          </p>
          <div className="buttons">
            <button className="btn btn-yes" onClick={handleYes}>
              Yes, Forever & Always
            </button>
        
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{modalContent.title}</h2>
            <p className="modal-message" style={{ whiteSpace: "pre-line" }}>
              {modalContent.message}
            </p>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
