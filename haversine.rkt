#lang racket

(define rEarth 6371)

(define (to-rad d) (/ (* pi d) 180))

(define haversine
  (lambda (from to)
    (define lat (to-rad (- (list-ref to 0) (list-ref from 0))))
    (define lon (to-rad (- (list-ref to 1) (list-ref from 1))))

    (define theta (to-rad (list-ref from 0)))
    (define phi (to-rad (list-ref to 0)))

    (define s (expt (sin (/ lat 2)) 2))
    (define t (expt (sin (/ lon 2)) 2))
    (define u (* t (cos theta) (cos phi)))

    (define c (* 2 (asin (sqrt (+ s u)))))

    (* rEarth c)
  ))

(haversine '(53 -6) '(43 2))
