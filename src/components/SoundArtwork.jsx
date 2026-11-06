const wave = [10, 18, 28, 15, 34, 22, 12, 27, 36, 19, 11, 24, 16, 30]

// Flat, sharp-edged and frameless so it sits alongside the bar, heat-map and timeline art.
export default function SoundArtwork() {
  return <svg viewBox="0 0 260 88" role="img" aria-label="Choose from Chime, Bell, or Alarm reminder sounds">
    <g className="sound-play">
      <circle cx="14" cy="22" r="13" fill="var(--green)" />
      <path d="M11 16.5 20 22l-9 5.5z" fill="var(--bg)" />
    </g>
    <g className="sound-wave">
      <path d="M36 22h224" fill="none" stroke="color-mix(in srgb, var(--green) 24%, transparent)" strokeWidth="1" />
      {wave.map((height, index) => <rect key={index} className="wave-bar" x={40 + index * 15.5} y={22 - height / 2} width="5" height={height} rx="1" fill={index % 4 === 0 ? '#72B18D' : '#4E916E'} />)}
    </g>
    <g className="sound-choice sound-choice-selected">
      <rect x="0" y="58" width="76" height="24" rx="3" fill="var(--green)" />
      <text x="38" y="73.5" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" letterSpacing=".6">CHIME</text>
    </g>
    <g className="sound-choice">
      <rect x="84.5" y="58.5" width="75" height="23" rx="3" fill="none" stroke="color-mix(in srgb, var(--ink) 28%, transparent)" />
      <text x="122" y="73.5" textAnchor="middle" fill="var(--mut)" fontSize="8.5" fontWeight="600" letterSpacing=".6">BELL</text>
    </g>
    <g className="sound-choice">
      <rect x="168.5" y="58.5" width="91" height="23" rx="3" fill="none" stroke="color-mix(in srgb, var(--ink) 28%, transparent)" />
      <text x="214" y="73.5" textAnchor="middle" fill="var(--mut)" fontSize="8.5" fontWeight="600" letterSpacing=".6">ALARM</text>
    </g>
  </svg>
}
