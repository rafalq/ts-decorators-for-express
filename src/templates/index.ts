enum LinkOptions {
  LOGGED_IN = 'loggedIn',
  LOGGED_OUT = 'loggedOut',
  GO_BACK = 'goBack',
  PROTECTED = 'protected',
}

const styles = {
  flexCol:
    'display: flex; flex-direction: column; justify-content: center; align-items: center;',
  flexRow:
    'display: flex; flex-direction: row; justify-content: center; align-items: center;',
  screenHeight: 'height: 100vh;',
  textRed: 'color: red;',
  textGray: 'color: gray;',
  button:
    'padding: 0.5rem; font-weight: bold; background: #c3c3c3; cursor: pointer;',
  link: 'padding: 0.5rem; font-weight: bold; text-decoration: none; color: black; border-bottom: 1px solid black;',
}

export const createTemplate = (
  headerSlot?: string,
  link?: string,
  children?: string,
  textColor?: string
): string => {
  if (textColor === 'error') {
    textColor = styles.textRed
  } else {
    textColor = styles.textGray
  }

  let linkEl = ''

  if (link) {
    switch (link) {
      case LinkOptions.LOGGED_IN:
        linkEl = `<a href="/logout" style="${styles.link}">LOGOUT</a>`
        break
      case LinkOptions.LOGGED_OUT:
        linkEl = `<a href="/login" style="${styles.link}">LOGIN</a>`
        break
      case LinkOptions.PROTECTED:
        linkEl = `<a href="/protected" style="${styles.link}">DASHBOARD</a>`
        break
      case LinkOptions.GO_BACK:
        linkEl = `<a href="javascript:history.back();" style="${styles.link}"><- BACK</a>`
        break
      default:
        break
    }
  }

  let childrenArea = ''

  if (children) {
    childrenArea = children
  }

  return `
  <div style="${styles.flexCol + styles.screenHeight}">
    <h1 style="${textColor}">${headerSlot}</h1>
    ${linkEl}
    ${childrenArea}
  </div>`
}

export const formTemplate = ` 
<form method="POST" style="${
  styles.flexCol + styles.screenHeight + 'gap: 1rem'
}">
    <div style="${styles.flexRow + ' gap: 1rem'}">
      <label style="font-size: 1.5rem;">Email</label>
      <input name="email" type="email" style="font-size: 1.5rem; padding: 0.2rem 0.3rem;" />
    </div>
    <div style="${styles.flexRow + ' gap: 1rem'}">
      <label style="font-size: 1.5rem;">Password</label>
      <input name="password" type="password" style="font-size: 1.5rem; padding: 0.2rem 0.3rem;"/>
    </div>
    <button style="${styles.button + ' font-size: 1.5rem;'}">SUBMIT</button>
  </form>`
