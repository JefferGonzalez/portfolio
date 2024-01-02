import useTranslationHook from '../../hooks/useTranslation'
import { useState } from 'react'

function Modal({ open }) {
  const [t] = useTranslationHook('global')
  const [show, setShow] = useState(open)

  return (
    show && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        <dialog
          open={show}
          className='bg-dark'
          style={{
            width: '600px',
            borderRadius: '8px',
            border: '1px solid #000',
            padding: '1em',
            boxShadow: '0 0 20px rgba(0, 0, 0, 1)',
            zIndex: 2
          }}
        >
          <header className='d-flex justify-content-center'>
            <h2 className='text-white'>
              {t('home.modal-advertisement.title')}
            </h2>
          </header>
          <section className='d-flex flex-column justify-content-center align-items-center'>
            <p
              className='text-white'
              style={{
                textWrap: 'pretty'
              }}
            >
              {t('home.modal-advertisement.description')}
              <a
                href='https://jeffer.dev/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue text-decoration-none'
              >
                https://jeffer.dev/
              </a>
            </p>

            <p
              className='text-white'
              style={{
                textWrap: 'pretty'
              }}
            >
              {t('home.modal-advertisement.paragraph')}
            </p>
          </section>

          <footer className='d-flex justify-content-end'>
            <button
              className='btn btn-outline-secondary'
              onClick={() => setShow(false)}
            >
              {t('actions.btn-close')}
            </button>
          </footer>
        </dialog>
      </div>
    )
  )
}

export default Modal
