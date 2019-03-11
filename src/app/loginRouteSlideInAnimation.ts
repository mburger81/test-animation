import { animate, group, style, transition, trigger, query, animateChild } from '@angular/animations';


export const loginRouteSlideInAnimation =
  trigger('loginRouteSlideInAnimation', [
    transition(':increment', [
      query(
        ':enter',
        [ style({ position: 'relative', left: '100%' })],
        { optional: true }
      ),
      group([
        query(
          ':leave',
          [ style({ display: 'none' })],
          { optional: true }
        ),
        query(
          ':enter',
          [ animate('800ms ease-out', style({ left: '0%' })) ],
          { optional: true }
        )
      ])
    ])
    ,
    transition(':decrement', [
      query(
        ':enter',
        [ style({ position: 'relative', right: '100%' })],
        { optional: true }
      ),
      group([
        query(
          ':leave',
          [ style({ display: 'none' })],
          { optional: true }
        ),
        query(
          ':enter',
          [ animate('800ms ease-out', style({ right: '0%' })) ],
          { optional: true }
        )
      ])
    ])
  ]);
