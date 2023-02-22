import { Stacl, Box} from '@mui/material';

const Videos = ({ videos}) => {
    return (
        <Stack direction="row"
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
        >
          {videos.map((item, indx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.videoId && <VideoCard video={item} />}
            </Box>
          ))}  
        </Stack>
    )
}

export default Videos