export default function Home(){
  return (
    <main className="min-h-screen px-4 pb-28 pt-4">
      <header className="flex items-center justify-between py-3">
        <img src="./loudrr-logo.png" alt="Loudrr" className="h-8 w-auto"/>
        <button className="flex items-center gap-2 rounded-full bg-white/5  py-1.5 pl-1.5 pr-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-primary)] text-xs font-bold text-black">A</span>
          <span className="text-sm text-white/80">alex</span>
        </button>
      </header>

      <div className="glass-card mt-4 p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-wider text-[var(--brand-primary)]">Balance</p>
          <span className="text-xs text-white/50 truncate">1.0x Multiplier</span>
          <button className="rounded-full border border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/10 px-3 py-1 text-xs font-bold uppercase text-while">Anon</button>
        </div>
        <p className="mt-3 text-5xl font-bold
                gold-gradient-text">1,234 Karma</p>
      

        <div className="mt-5 rounded-2xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/40  p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white/70">Today's Progress</p>
            <p className="text-sm font-bold text-white">3 / 8</p>
          </div>
            <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[38%] rounded-full bg-[var(--brand-primary)]"></div>
            
          </div>
        </div>
      </div>    
      
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="rounded-xl border
                border-[var(--brand-primary)]/40
                bg-[var(--brand-primary)]/10 p-4 text-left">
          <p className="font-bold text-white">Start Engaging</p>
          <p className="mt-1 text-xs text-white/60">Earn Karma now</p>
        </button>
        <button className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
          <p className="font-semibold text-white">Campaigns</p>
          <p className="mt-1 text-xs text-white/40">Coming soon</p>
        </button>
      </div>

      <div className="glass-card mt-4  p-5">
        <p className="text-sm font-bold text-white">5 day streak</p>
        <ul className="mt-3 flex gap-1.5">
          <li className="flex h-9 flex-1 items-center justify-center rounded-lg bg-[var(--brand-primary)] text-xs font-bold text-black">M</li>
          <li className="flex h-9 flex-1 items-center justify-center rounded-lg bg-[var(--brand-primary)] text-xs font-bold text-black">T</li>
          <li className="flex h-9 flex-1 items-center justify-center rounded-lg bg-[var(--brand-primary)] text-xs font-bold text-black">W</li>
          <li className="flex h-9 flex-1 items-center justify-center rounded-lg bg-[var(--brand-primary)] text-xs font-bold text-black">T</li>
          <li className="flex h-9 flex-1 items-center justify-center rounded-lg bg-[var(--brand-primary)] text-xs font-bold text-black">F</li>
          <li className="flex h-9 flex-1 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-white/40">S</li>
          <li className="flex h-9 flex-1 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-white/40">S</li>
        </ul>
      </div>

      <nav className="fixed inset-x-4 bottom-4 flex
                  justify-around rounded-3xl border
                  border-[var(--brand-primary)]/30
                  bg-[var(--surface-2)] py-3">
        <a href="#"  className="flex flex-col items-center gap-1 text-[var(--brand-primary)]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 1
01.06-1.06l-8.69-8.69a2.25 2.25 0 00-3.18 0l-8.69 8.69a.75.7
5 0 101.06 1.06l8.69-8.69z" />
<path d="M12 5.43l8.16 8.16.09.09v6.2c0 1.04-.84 1.88-1.8
8 1.88H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.7
5.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.63a1.88 1.88 0 01-1
.88-1.88v-6.2l.09-.09L12 5.43z" />
</svg>
<span className="text-[10px] font-semibold">Home</span></a>
        
        <a href="#" className="flex flex-col items-center gap-1 text-white/40"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
<path d="M14.62 1.6a.75.75 0 01.36.85L12.98 9.75h7.27a.7
5.75 0 01.55 1.26l-10.5 11.25a.75.75 0 01-1.27-.71l1.99-7.3H
3.75a.75.75 0 01-.55-1.26l10.5-11.25a.75.75 0 01.92-.14z" />
</svg>
        <span className="text-[10px] font-semibold">Engage</span></a>

        <a href="#" className="flex flex-col items-center gap-1 text-white/40"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
strokeWidth="1.5" className="h-5 w-5">
<path strokeLinecap="round" strokeLinejoin="round"
d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
<path strokeLinecap="round" strokeLinejoin="round"
d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
</svg>
        <span className="text-[10px] font-semibold">Campaigns</span></a>

        <a href="#" className="flex flex-col items-center gap-1 text-white/40"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
strokeWidth="1.5" className="h-5 w-5">
<path strokeLinecap="round" strokeLinejoin="round"
d="M11.48 3.5a.56.56 0 011.04 0l2.12 5.11a.56.56 0 0
0 .48.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 00-.18.5
6l1.28 5.39a.56.56 0 01-.84.6l-4.72-2.88a.56.56 0 00-.59 0l-
4.73 2.89a.56.56 0 01-.84-.61l1.29-5.39a.56.56 0 00-.18-.56l
-4.2-3.6a.56.56 0 01.32-.99l5.52-.44a.56.56 0 00.47-.35z" />
</svg>
          <span className="text-[10px] font-semibold">Earn</span></a>

        <a href="#" className="flex flex-col items-center gap-1 text-white/40"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
strokeWidth="1.5" className="h-5 w-5">
<path strokeLinecap="round" strokeLinejoin="round"
d="M15.36 5.21A8.25 8.25 0 0112 21 8.25 8.25 0 016.0
4 7.05 8.29 8.29 0 009 9.6a8.98 8.98 0 013.36-6.87 8.21 8.21
0 003 2.48z" />
</svg>
        <span className="text-[10px] font-semibold">Loud</span></a>
      </nav>
    </main>
  );
}