import styled from 'styled-components';

export const SCPodcastDetailedCard = styled.div`
    width: 14rem;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: relative;

    .card-img { 
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10%;
     }
    
     .card-body {
        font-family: 'Roboto', sans-serif;

         .card-title{
            margin: 1rem 0 0 0;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            font-size: 16px;

        }
        .card-author{
            margin: 0 0 1rem 0;
            font-style: italic;
             font-size: 14px;


        }

        .card-text-title{
            font-weight: bolder;
            font-size: 16px;
        }
        .card-text{
            font-style: italic;
            font-size: 16px;
         }
    }

    
      
     
`