//componente react
import appConfig from '../config.json'
import {Box, Button, Text, TextField,Image} from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router'

function Title(props){
    const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}
/* function HomePage(){
    return (
        <div>
            <GlobalStyle/>
             <Title tag="h1">Boas vindas de volta!</Title>
             <h2>Discord - Alura Matrix</h2>
            
            <style jsx>{`
                h1{
                    color:red;

                }

            `}</style>
            </div>
    )
} 


 export default HomePage*/

 export default  function  PaginaInicial() {
    //const username = 'TulioMoura';
    const [username, setUserName] = React.useState('TulioMoura');
   const [githubInfo, setGithubInfo] = React.useState('');
    const roteamento = useRouter()
     
     function loadUserData({}){
       fetch(`https://api.github.com/users/${username}`)
                .then(response=> response.json())
                .then(function(body){
                  setGithubInfo(body)
                })
                 
                  
    }
                   
   
    return (
      <>
        
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/12/16/11/47/waters-3022515_960_720.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
         

          
          <Box 
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
               flexDirection: {
                xs: 'column',
                sm: 'row',
              }, 
              width: '100%', maxWidth: '700px',
              height : '50%',
              borderRadius: '10px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
              opacity: 0.9,
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={ function(e){
                e.preventDefault();
                {roteamento.push('/chat')}
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body4" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300],}}>
                {appConfig.name}
              </Text>
  
             
               
              
              
           
              <Box styleSheet={{
                width: '100%',
                display:'flex',
                maxHeight:'34px',
                margin: '8px'
                
              }}>
              <TextField value={username}
              styleSheet={{
                width: '80%',
                maxWidth: '700px',
                borderRadius: '4px 0px  0px 4px' 
              }}
              onChange={async function(e){
                let user= e.target.value
                
                setUserName(user);
                    
                    
   }
            }
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
                
              >
                
              </TextField>

               <Button label= 'Preview' 
              onClick={loadUserData}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["200"],
                mainColor: appConfig.theme.colors.primary[400],
                mainColorLight: appConfig.theme.colors.primary[400],
                
              }}
              styleSheet={{
                fontSize:'14px',
                paddingTop:'8px',
                paddingBottom:'8px',
                paddingLeft:'12px',
                paddingRight:'12px',

                borderRadius: '0px 4px  4px 0px'
              }}
              /> 
              </Box>
              <Button
                type='submit'
                label='Entrar'
                
                fullWidth
                
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[400],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.neutrals[800],
                }}
                
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[700],
                
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
             {username.length>2?(
             <>
             <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body2"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
                
                
              </Text>
              
              </>
            ):(<></>)}
            </Box>
            
              
            
            
            {/* Photo Area */}
          </Box>
          <Text styleSheet={{
            width: '100%', maxWidth: '700px',
            minHeight:'25%',
            maxHeight:'50%',
            borderRadius: '10px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
            opacity: 0.9,
          }}>
                <br/>
                Descrição : {githubInfo.bio}
              </Text>
          </Box>
        
      </>
    );
  }