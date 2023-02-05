import styled from 'styled-components';

export const SCPodcastCard = styled.div`
    width: 14rem;
    margin-top: 30px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: relative;

    .card-img-top {
        position: absolute;
        top: -30px;
        left: 50%;
        margin-left: -30px;
        width: 60px !important;
        height: 60px;
        border-radius: 50%;
     }
    
     .card-body {
        font-family: 'Roboto', sans-serif;

        text-align: center;
        .card-title{
            text-transform: uppercase;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;

        }
        .card-text{
            font-size: 16px;
            color: #999;
        }
    }

    
      
     
`