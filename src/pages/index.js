import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AutoChat - Automatización fácil</title>
      </Head>
      <main className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Bienvenido a AutoChat</h1>
          <p className="text-lg text-blue-600">Automatiza tus mensajes de Instagram y WhatsApp fácilmente.</p>
        </div>
      </main>
    </>
  )
}
