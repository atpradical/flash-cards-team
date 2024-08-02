export const createUserHTML = `
  <div>
    <h1 style="margin-top:0;color:#333333;font-size:24px;font-weight:bold;text-align:left">
      Thanks for signing up for, ##name##!
    </h1>

    <p style="color:#51545e;margin:0.4em 0 1.1875em;font-size:16px;line-height:1.625">
      We're happy you're here. Let's get your email address verified:
    </p>

    <p style="color:#51545e;margin:0.4em 0 1.1875em;font-size:16px;line-height:1.625">Your code:</p>

    <h2 style="margin-top:0;margin-bottom:0.4em;color:#333333;font-size:20px;font-weight:bold;text-align:left">
      ##token##
    </h2>

    <p style="color:#51545e;margin:0.4em 0 1.1875em;font-size:16px;line-height:1.625">
      Or confirm by following the link:
    </p>

    <p style="color:#51545e;margin:0.4em 0 1.1875em;font-size:16px;line-height:1.625">
      <a href="http://localhost:3000/confirm-email/##token##" style="color:#ffffff;background-color:#3869d4;border-top:10px solid #3869d4;border-right:18px solid #3869d4;border-bottom:10px solid #3869d4;border-left:18px solid #3869d4;display:inline-block;text-decoration:none;border-radius:3px;box-sizing:border-box" target="_blank">Click to Verify Email</a>
    </p>
  </div>
`
