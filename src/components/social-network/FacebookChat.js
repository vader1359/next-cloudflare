import { useEffect } from "react"

/**
 *
 */
export function init() {
  var chatbox = document.getElementById("fb-customer-chat")
  chatbox.setAttribute("page_id", "569751026848268") // TODO: move to args
  chatbox.setAttribute("attribution", "biz_inbox")

  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: "v11.0",
    })
  }
  ;(function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) return
    js = d.createElement(s)
    js.id = id
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
    fjs.parentNode.insertBefore(js, fjs)
  })(document, "script", "facebook-jssdk")
  window.onload = function () {}
}

/**
 *
 */
export function cleanup() {
  ;(function (d, id) {
    var target = d.getElementById(id)
    if (target) {
      target.parentNode.removeChild(target)
    }
  })(document, "facebook-jssdk")

  delete window.FB
}

export function FacebookChat({ className }) {
  useEffect(() => {
    init()
    return () => {
      cleanup()
    }
  }, [])

  return (
    <div className={className}>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  )
}
