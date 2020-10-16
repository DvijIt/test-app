import './index.scss'

document.addEventListener('DOMContentLoaded', () => {

  // toggle modal
  const modal = document.querySelector('.modal')
  const modal_btn = document.querySelector('.modal-btn')

  function showModal() {
    modal.classList.add('open')
  }

  function hideModal() {
    modal.classList.remove('open')
  }

  modal_btn.addEventListener('click', function() {
    showModal()
  })

  document.addEventListener('click', function(e) {
    if (e.target.closest('.modal') === null && e.target !== modal_btn) {
      hideModal()
    }
  })

  const close_modal_btn = document.querySelector('.modal__close-btn')
  close_modal_btn.addEventListener('click', function() {
    hideModal()
  })

  // active box
  const currency_result = document.querySelector('.currency-result')
  const payment_items = [...document.querySelectorAll('.modal__payments-item')]
  payment_items.forEach(el => {
    el.addEventListener('click', function () {
      payment_items.forEach(el => el.classList.remove('active'))
      this.classList.add('active')
      const pay_to = this.querySelector('.currency-to').innerHTML
      currency_result.innerText = `$ ${pay_to}`
    })
  })

  // button send
  const selected_option = document.querySelector('#select')
  const btn_send = document.querySelector('.btn-send')
  btn_send.addEventListener('click', function () {
    const variant_of_pay = selected_option[selected_option.selectedIndex].innerHTML;
    const current_pay_to = document.querySelector('.modal__payments-item.active .currency-from')
    const allertValue = {
      "Способ оплаты": variant_of_pay,
      "Пополнить на": current_pay_to.innerHTML
    }
    alert(JSON.stringify(allertValue))
  })

  // timer
  function startTimer(duration, display) {
    let timer = duration,
      minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = `00:${minutes}:${seconds}`;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  const minutes = 60 * 16
  const display = document.querySelector('.counter__timer');
  startTimer(minutes, display);

});