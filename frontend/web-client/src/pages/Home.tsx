import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Container,
  InputAdornment,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Paper,
  styled
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.ico';

const ColoredTextField = styled(TextField)(({ role }: { role?: string }) => ({
  '& .MuiInputLabel-root': {
    color: 
      role === 'portieri' ? '#FFD700 !important' :
      role === 'difensori' ? '#4CAF50 !important' :
      role === 'centrocampisti' ? '#00BCD4 !important' :
      '#F44336 !important',
    '&.Mui-focused': {
      color: 
        role === 'portieri' ? '#FFD700 !important' :
        role === 'difensori' ? '#4CAF50 !important' :
        role === 'centrocampisti' ? '#00BCD4 !important' :
        '#F44336 !important'
    }
  }
}));

type AuctionType = 'CHIAMATA' | 'ALFABETICA' | 'RANDOM';

interface AuctionConfig {
  partecipanti: number;
  tipologia: AuctionType;
  portieri: number;
  difensori: number;
  centrocampisti: number;
  attaccanti: number;
  budget: number;
}

const AuctionConfigPage: React.FC = () => {
  const [config, setConfig] = useState<AuctionConfig>({
    partecipanti: 8,
    tipologia: 'CHIAMATA',
    portieri: 3,
    difensori: 8,
    centrocampisti: 8,
    attaccanti: 6,
    budget: 500
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field: keyof AuctionConfig) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({
      ...config,
      [field]: e.target.value
    });
  };

  const handleSelectChange = (field: keyof AuctionConfig) => (e: any) => {
    setConfig({
      ...config,
      [field]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const API_BASE = import.meta.env.VITE_API_BASE || '/asta';
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          numeroPartecipanti: config.partecipanti,
          tipologiaAsta: config.tipologia,
          numeroPortieri: config.portieri,
          numeroDifensori: config.difensori,
          numeroCentrocampisti: config.centrocampisti,
          numeroAttaccanti: config.attaccanti,
          budget: config.budget
        })
      });

      if (!response.ok) throw new Error(`Errore ${response.status}`);
      const data = await response.json();
      setSuccess('Asta creata con id ' + data.id);
    } catch (err) {
      setError((err as Error).message || 'Errore');
    } finally {
      setIsLoading(false);
    }
  };

  // Validazione del form
  const isFormValid = () => {
    return (
      config.partecipanti >= 2 &&
      config.partecipanti <= 20 &&
      config.portieri > 0 &&
      config.difensori > 0 &&
      config.centrocampisti > 0 &&
      config.attaccanti > 0 &&
      config.budget > 0
    );
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #072E4C 0%, #1A4A6B 50%, #E8D8B8 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        },
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <img src={Logo} alt="Logo" style={{ width: "100px" }} />
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.36)',
            '&:hover': {
              borderColor: 'rgba(255, 255, 255, 0.4)',
            },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 600,
              color: 'white',
              mb: 4,
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            ⚙️ Configurazione Asta ⚙️
          </Typography>

          {error && (
            <Alert severity="error" sx={{ 
              mb: 3, 
              borderRadius: 2, 
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white'
            }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ 
              mb: 3, 
              borderRadius: 2, 
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white'
            }}>
              {success}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            {/* Sezione Partecipanti */}
            <FormControl fullWidth sx={{ mb: 3 }}>
              <Typography 
                component="label" 
                htmlFor="partecipanti-select"
                sx={{
                  display: 'block',
                  color: 'white',
                  mb: 1,
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}
              >
                🫂 Numero partecipanti 🫂
              </Typography>
              <Select
                id="partecipanti-select"
                value={config.partecipanti}
                onChange={handleSelectChange('partecipanti')}
                sx={{
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.6)',
                  },
                  '& .MuiSelect-icon': {
                    color: 'white',
                  },
                  height: '56px'
                }}
              >
                {Array.from({length: 19}, (_, i) => i + 2).map(num => (
                  <MenuItem key={num} value={num} sx={{ color: '#072E4C' }}>{num}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Sezione Tipologia */}
            <FormControl component="fieldset" fullWidth sx={{ mb: 3 }}>
              <Typography 
                component="legend" 
                sx={{ 
                  color: 'white', 
                  mb: 1,
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}
              >
                🏟️ Tipologia asta 🏟️
              </Typography>
              <RadioGroup
                value={config.tipologia}
                onChange={handleSelectChange('tipologia')}
              >
                <FormControlLabel 
                  value="CHIAMATA" 
                  control={<Radio sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    '&.Mui-checked': { color: 'white' } 
                  }} />} 
                  label={<Typography sx={{ color: 'white' }}>Chiamata</Typography>}
                />
                <FormControlLabel 
                  value="ALFABETICA" 
                  control={<Radio sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    '&.Mui-checked': { color: 'white' } 
                  }} />} 
                  label={<Typography sx={{ color: 'white' }}>Alfabetica</Typography>}
                />
                <FormControlLabel 
                  value="RANDOM" 
                  control={<Radio sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    '&.Mui-checked': { color: 'white' } 
                  }} />} 
                  label={<Typography sx={{ color: 'white' }}>Random</Typography>}
                />
              </RadioGroup>
            </FormControl>

            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', my: 3 }} />

            {/* Sezione Squadra */}
            <Typography variant="h6" sx={{ color: 'white', mb: 2, fontWeight: 500 }}>
              Configurazione Squadra
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
              <ColoredTextField
                role="portieri"
                label="🧤 Portieri 🧤"
                type="number"
                value={config.portieri}
                onChange={handleChange('portieri')}
                fullWidth
                inputProps={{ min: 1 }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                    },
                  },
                }}
              />

              <ColoredTextField
                role="difensori"
                label="🛡️ Difensori 🛡️"
                type="number"
                value={config.difensori}
                onChange={handleChange('difensori')}
                fullWidth
                inputProps={{ min: 1 }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                    },
                  },
                }}
              />

              <ColoredTextField
                role="centrocampisti"
                label="⚽️ Centrocampisti ⚽️"
                type="number"
                value={config.centrocampisti}
                onChange={handleChange('centrocampisti')}
                fullWidth
                inputProps={{ min: 1 }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                    },
                  },
                }}
              />

              <ColoredTextField
                role="attaccanti"
                label="🥅 Attaccanti 🥅"
                type="number"
                value={config.attaccanti}
                onChange={handleChange('attaccanti')}
                fullWidth
                inputProps={{ min: 1 }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                    },
                  },
                }}
              />
            </Box>

            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', my: 3 }} />

            {/* Sezione Budget */}
            <Typography variant="h6" sx={{ color: 'white', mb: 2, fontWeight: 500 }}>
              Budget
            </Typography>
            
            <TextField
              fullWidth
              label="💰 Budget per utente 💰"
              type="number"
              value={config.budget}
              onChange={handleChange('budget')}
              inputProps={{ min: 1 }}
              InputProps={{
                startAdornment: <InputAdornment position="start" sx={{ color: 'white' }}></InputAdornment>,
              }}
              InputLabelProps={{ 
                sx: { 
                  color: 'white !important',
                  '&.Mui-focused': {
                    color: 'white !important'
                  }
                } 
              }}
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.6)',
                  },
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isLoading || !isFormValid()}
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Crea Asta'}
            </Button>
          </Box>
        </Paper>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            © 2025 Fantacalcio Terlizzi - Developed by Peppe & Michele
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AuctionConfigPage;