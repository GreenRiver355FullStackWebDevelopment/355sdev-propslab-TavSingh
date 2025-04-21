import { Typography, Card, CardHeader, CardContent, CardActions, Box } from '@mui/material';


const Recipe = ({ recipe, ingredients, instructions }) => {
    return (
        <Box m={2} pt={3} sx={{ bgcolor: 'secondary.main' }}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActions style={{display:"flex", justifyContent:"space-between"}}>
            <CardContent>

                <CardHeader title={recipe} />

                <ul>
                    {ingredients.map((data, index) => (
                        <li key={index}>{data}</li>
                    ))}
                </ul>


                <Typography variant='body2'>{instructions}</Typography>
            </CardContent>
            </CardActions>
        </Card>
        </Box>
    )
}

export default Recipe;