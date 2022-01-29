// TESTIMONIAL // 
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
      name: 'Sophie Lyons',
      service: 'Fencing',
      text:
        'Will did a great job with our fencing. Completely understood what we needed and did a very good job at a reasonable price. Friendly and easy to deal with. Highly recommend.',
    },
    {
      name: 'Raphi Randall',
      service: 'Landscaping',
      text:
        'Will and Connor did a brilliant job to our tired front garden. They had great ideas and helped me with my vision of using reclaimed bricks and fresh coping stone. Despite terrible weather and external factors the job was completed to a high standard and I’m very pleased!',
    },
    {
      name: 'Victoria Doxat',
      service: 'Landscaping',
      text:
        'Absolutely FIRST CLASS service. Will landscaped our front garden, including replacing the old steps with new brick. Will did a GREAT job but more importantly went above and beyond to deliver excellent customer service - professionally and with good humour.',
    },
    {
      name: 'Lucy Maggs Krebs',
      service: 'Fencing',
      text:
        'Highly recommend Barton Garden Services in Petersfield, they built the most beautiful custom fence for us last week. Professional, prompt and tidy.',
    },
    {
      name: 'Julie Osborne',
      service: 'Pruning',
      text:
        'Great work from Will and team who put us up a fantastic fence at the front of the property and did a fab job in pruning our out of control apple tree. Would definitely recommend and also intend to get him back in the spring to prune a cherry tree.',
    },
    {
      name: 'Charlie Spencer',
      service: 'Patio',
      text:
        'Engaged Will and his team for a pretty extensive front and rear patio job in porcelain, working around some complicating features from the interesting execution by the original builders. Will and his guys were great at explaining the process, coming up with solutions to challenges, and keeping me informed of everything going on, as well as when external factors caused delay or further complications',
    },
    {
      name: 'Lou Gregson',
      service: 'Maintenance',
      text:
        'Absolutely wonderful services! From quote to completion of regular maintaining of our garden, Will has been fantastic. We highly recommend Barton Garden Services, for an excellent professional job!',
    },
  ]

  let idx = 1

  function updateTestimonial() {
    const { name, service, text } = testimonials[idx]
  
    testimonial.innerHTML = text
    username.innerHTML = name
    role.innerHTML = service
  
    idx++
  
    if (idx > testimonials.length - 1) {
      idx = 0
    }
  }
  
  setInterval(updateTestimonial, 10000)




  //IMAGES //

const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs .project-img')

let idximage = 0

let interval = setInterval(run, 2000)

function run() {
idximage++
changeImage()
}

function changeImage() {
    if(idximage > img.length - 1) {
        idximage = 0
    } else if (idximage < 0) {
        idximage = img.length - 1
    }

    imgs.style.transform = `translateX(${-idximage * 500}px)`
 }

 function resetInterval() {
     clearInterval(interval)
     interval = setInterval(run, 2000)
 }

 rightBtn.addEventListener('click', () => {
     idximage++
     changeImage()
     resetInterval()
 })

leftBtn.addEventListener('click', () => {
    idximage--
    changeImage()
    resetInterval()
})

