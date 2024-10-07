import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sword, Target, Mask } from 'lucide-react';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Mask className="w-16 h-16 text-red-600" />
          </motion.div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? "Deadpool's Login" : "Join Deadpool's Squad"}
        </h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="wade@wilson.com"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Chimichangas123!"
              className="w-full"
            />
          </div>
          {!isLogin && (
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Chimichangas123!"
                className="w-full"
              />
            </div>
          )}
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={toggleForm}
            className="text-red-600 hover:text-red-800 font-semibold transition-colors duration-300"
          >
            {isLogin ? "New here? Join the mayhem!" : "Already in? Let's go!"}
          </button>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <motion.div whileHover={{ rotate: 180 }} className="text-red-600">
            <Sword className="w-6 h-6" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="text-red-600"
          >
            <Target className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;