export function HeroIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      className={className ? className : ''}
    >
      <g fill='none'>
        <path
          fill='url(#IconifyId1917a87d9093c9101141)'
          d='M13.28 8.875V2.79c.03-.15-.026-.506-.493-.725c-.407-.191-.85.091-.983.274c-2.029 3.24-5.815 10.057-5.963 10.399c-.187.432-.06.702.118.9c.132.15.448.238.617.238h4.116l-.878 7.445c.013.172.155.545.627.658s.797-.228.9-.412l6.73-11.388c.098-.15.3-.55.085-.9a.87.87 0 0 0-.779-.403z'
        />
        <defs>
          <linearGradient
            id='IconifyId1917a87d9093c9101141'
            x1='12'
            x2='12'
            y1='2'
            y2='22'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#10b981' />
            <stop offset='1' stop-color='#4ade80' />
          </linearGradient>
        </defs>
      </g>
    </svg>
  )
}