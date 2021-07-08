import React from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default function About() {
    return (
        <div className='about-page'>
            <h1 className="about-header">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                About
            </h1>
            <Container>
                <p className="about-story mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget molestie ante. Nulla nec libero quam. Phasellus tortor ante, sagittis ac blandit ac, suscipit et nulla. Cras eu magna iaculis enim consequat dignissim. Etiam sed consequat dolor. Pellentesque facilisis pharetra hendrerit. Vivamus vel rhoncus libero. Vestibulum luctus magna quis orci blandit, aliquet tempor urna dignissim.
                    <br></br>
                    <br></br>
                    Sed ornare, risus eu scelerisque sagittis, urna nibh cursus lorem, vestibulum interdum massa nisi sed quam. Donec venenatis odio sapien, a ultrices erat convallis vitae. Suspendisse quam mauris, elementum a nulla nec, suscipit sagittis lectus. Sed vestibulum augue sit amet sagittis luctus. Nunc a pharetra metus, id gravida enim. Duis lacinia malesuada massa dictum ornare. Aliquam ipsum sem, sollicitudin maximus risus a, fringilla fringilla arcu. Vestibulum quis lacus non urna accumsan maximus.
                    <br></br>
                    <br></br>
                    Praesent massa erat, varius at vestibulum sit amet, dignissim id metus. Nunc sed tortor accumsan, iaculis nunc ac, vulputate magna. Sed ligula eros, laoreet quis sagittis eget, tincidunt vitae purus. Donec ac libero a erat ullamcorper semper quis ac massa. Sed eu posuere risus, nec dictum nibh. Donec eget tortor nec nisi ullamcorper gravida. Praesent semper mauris sit amet enim aliquam faucibus. Integer suscipit, nulla at cursus varius, mauris tellus gravida nisl, vel dignissim erat massa ut ipsum. Pellentesque sagittis nisi metus, sed posuere est pulvinar sit amet. Morbi interdum aliquet aliquet. Vivamus metus sapien, maximus eu risus ut, feugiat sagittis sem. Vestibulum non tincidunt nibh. Vivamus hendrerit pellentesque odio ac vulputate. Cras ac imperdiet ligula. Mauris vitae arcu luctus, elementum eros nec, commodo massa. Proin vel hendrerit turpis.
                    <br></br>
                    <br></br>
                    Morbi eget nisi vel magna fringilla feugiat ut lacinia metus. Quisque elementum magna semper suscipit sollicitudin. Integer tellus nisi, viverra quis arcu id, vehicula scelerisque est. Quisque lacinia et lectus cursus feugiat. Praesent sit amet arcu varius, facilisis nulla ut, vestibulum odio. Sed consequat, purus ac fringilla euismod, ipsum libero eleifend tortor, a semper sem purus vel velit. Nam consectetur eros quis pulvinar hendrerit. Nunc feugiat dapibus enim vitae egestas. Nulla non cursus enim. Pellentesque urna sapien, commodo vel interdum ac, condimentum malesuada eros.
                    <br></br>
                    <br></br>
                    Maecenas consequat commodo nunc. Maecenas ac diam sit amet purus egestas commodo. Nunc convallis dui sit amet elit bibendum hendrerit. Quisque semper diam sapien, eu iaculis lorem aliquam id. Nulla at sollicitudin ipsum, vitae accumsan augue. Vivamus ante lacus, hendrerit fermentum erat at, euismod malesuada ipsum. Suspendisse fringilla tortor vel finibus consequat.
                </p>
            </Container>
        </div>
    )
}
