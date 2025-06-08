
document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.querySelector(".mobile-menu-toggle")
    const navLinks = document.querySelector(".nav-links")
  
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active")
      })
    }
  
  
    const navLinkItems = document.querySelectorAll(".nav-links a")
    navLinkItems.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
      })
    })
  
    
    const faqQuestions = document.querySelectorAll(".faq-question")
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        const toggle = this.querySelector(".faq-toggle")
        if (toggle.textContent === "+") {
          toggle.textContent = "−"
        } else {
          toggle.textContent = "+"
        }
      })
    })
  
    
    const contactForm = document.querySelector(".contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        alert("Thank you for your message! We'll get back to you within 12-14 hours.")
      })
    }
  
    
    const testimonialTrack = document.getElementById("testimonialTrack")
    const prevBtn = document.getElementById("prevBtn")
    const nextBtn = document.getElementById("nextBtn")
    const indicators = document.querySelectorAll(".indicator")
    const testimonialCards = document.querySelectorAll(".testimonial-card")
  
    let currentSlide = 0
    const totalSlides = testimonialCards.length
  
    function updateCarousel() {
    
      const translateX = -currentSlide * (100 / totalSlides)
      testimonialTrack.style.transform = `translateX(${translateX}%)`
  
      
      testimonialCards.forEach((card, index) => {
        card.classList.toggle("active", index === currentSlide)
      })
  
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide)
      })
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides
      updateCarousel()
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
      updateCarousel()
    }
  
    function goToSlide(slideIndex) {
      currentSlide = slideIndex
      updateCarousel()
    }
  
    
    if (nextBtn) {
      nextBtn.addEventListener("click", nextSlide)
    }
  
    if (prevBtn) {
      prevBtn.addEventListener("click", prevSlide)
    }
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => goToSlide(index))
    })
  
  
    let autoPlayInterval = setInterval(nextSlide, 5000)
  

    const testimonialSection = document.querySelector(".testimonials-section")
    if (testimonialSection) {
      testimonialSection.addEventListener("mouseenter", () => {
        clearInterval(autoPlayInterval)
      })
  
      testimonialSection.addEventListener("mouseleave", () => {
        autoPlayInterval = setInterval(nextSlide, 5000)
      })
    }
  
   
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    })
  
    let startX = 0
    let endX = 0
  
    if (testimonialTrack) {
      testimonialTrack.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX
      })
  
      testimonialTrack.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX
        const difference = startX - endX
  
        if (Math.abs(difference) > 50) {
         
          if (difference > 0) {
            nextSlide() 
          } else {
            prevSlide() 
          }
        }
      })
    }
  
   
    updateCarousel()
  
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  })

document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  const navLinkItems = document.querySelectorAll(".nav-links a")
  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
    })
  })


  const faqQuestions = document.querySelectorAll(".faq-question")
  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const toggle = this.querySelector(".faq-toggle")
      if (toggle.textContent === "+") {
        toggle.textContent = "−"
      } else {
        toggle.textContent = "+"
      }
    })
  })


  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for your message! We'll get back to you within 12-14 hours.")
    })
  }

  const testimonialTrack = document.getElementById("testimonialTrack")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")
  const indicators = document.querySelectorAll(".indicator")
  const testimonialCards = document.querySelectorAll(".testimonial-card")

  let currentSlide = 0
  const totalSlides = testimonialCards.length

  function updateCarousel() {
 
    const translateX = -currentSlide * (100 / totalSlides)
    testimonialTrack.style.transform = `translateX(${translateX}%)`

  
    testimonialCards.forEach((card, index) => {
      card.classList.toggle("active", index === currentSlide)
    })

  
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide)
    })
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    updateCarousel()
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    updateCarousel()
  }

  function goToSlide(slideIndex) {
    currentSlide = slideIndex
    updateCarousel()
  }

  
  if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide)
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide)
  }

  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => goToSlide(index))
  })

  let autoPlayInterval = setInterval(nextSlide, 5000)


  const testimonialSection = document.querySelector(".testimonials-section")
  if (testimonialSection) {
    testimonialSection.addEventListener("mouseenter", () => {
      clearInterval(autoPlayInterval)
    })

    testimonialSection.addEventListener("mouseleave", () => {
      autoPlayInterval = setInterval(nextSlide, 5000)
    })
  }

 
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide()
    } else if (e.key === "ArrowRight") {
      nextSlide()
    }
  })

  
  let startX = 0
  let endX = 0

  if (testimonialTrack) {
    testimonialTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX
    })

    testimonialTrack.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX
      const difference = startX - endX

      if (Math.abs(difference) > 50) {
       
        if (difference > 0) {
          nextSlide()
          prevSlide() 
        }
      }
    })
  }

  updateCarousel()

 
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})
  