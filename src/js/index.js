/**
 * The main script file of the application.
 *
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 * @version 1.1.0
 */

try {
  const message = document.querySelector('#message')
  message.textContent = 'Hello, World!'
} catch (error) {
  const message = document.querySelector('#message')
  message.textContent = 'Sorry, something went wrong. Please try again.'
}
