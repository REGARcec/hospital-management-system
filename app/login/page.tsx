import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-[#EAF2FB] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl rounded-[28px] bg-white/90 p-10 shadow-glass backdrop-blur-xl border border-slate-200">
        <div className="mb-8 text-center">
          <p className="text-brand-600 font-semibold uppercase tracking-[0.25em]">Login Rumah Sakit</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Akses Dashboard Rumah Sakit</h1>
          <p className="mt-3 text-slate-600">Masuk untuk melihat jadwal kontrol, rekam medis, dan manajemen rumah sakit.</p>
        </div>

        <LoginForm />
      </div>
    </section>
  );
}
